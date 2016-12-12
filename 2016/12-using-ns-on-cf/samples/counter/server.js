'use strict'

const http = require('http')
const cfenv = require('cfenv')
const redis = require('redis')

// get application environment
const AppEnv = cfenv.getAppEnv()

// get redis credentials
const RedisCreds = AppEnv.getServiceCreds('counter-redis')
const RedisClient = RedisCreds ? redis.createClient(RedisCreds) : null

// start the http server
const Server = http.createServer(onRequest)
Server.listen(AppEnv.port, onListening)

// callback fired when server starts listening for requests
function onListening () {
  console.log(`Server listening on ${AppEnv.url}`)
}

// handle an HTTP request
function onRequest (req, res) {
  getCounters((err, counters) => {
    res.end(`<h1>Starts: ${counters.starts}, Requests: ${counters.requests}</h1>`)
  })
}

// dummy counters to return on errors
const DummyCounters = {
  starts: 17,
  requests: 42
}

// remember the first time we incr starts counter
let CountedStart = false

// get the starts/requests counters
function getCounters (cb) {
  if (RedisClient == null) return setImmediate(cb, null, DummyCounters)

  const result = {}

  RedisClient.incr('requests', gotRequests)

  // handle response from incr requests
  function gotRequests (err, value) {
    if (err) return cb(null, DummyCounters)

    result.requests = value

    if (CountedStart) {
      RedisClient.get('starts', gotStarts)
    } else {
      CountedStart = true
      RedisClient.incr('starts', gotStarts)
    }
  }

  // handle response from get|incr starts
  function gotStarts (err, value) {
    if (err) return cb(null, DummyCounters)

    result.starts = value

    cb(null, result)
  }
}
