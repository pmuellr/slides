'use strict'

const path = require('path')
const http = require('http')

const PROGRAM = path.basename(__filename)
process.title = PROGRAM

let   URL
const Requests = []

const Tagged = new WeakMap()
class RequestTag {}
class ResponseTag {}

log('starting')

const server = http.createServer(requestHandler)
server.listen(0, listening)


//------------------------------------------------------------------------------
function listening() {
  const port = server.address().port
  URL = `http://localhost:${port}`
  log(`starting server at ${URL}`)
  setInterval(makeRequest, 10)
}

//------------------------------------------------------------------------------
function requestHandler(req, res) {
  req.__hstag = new RequestTag
  res.__hstag = new ResponseTag

  Requests.push(req)
  if (Requests.length > 10000) Requests.shift()

  res.end('not much going on')
}

//------------------------------------------------------------------------------
function makeRequest() {
  http.get(URL)
}

//------------------------------------------------------------------------------
function log(message) {
  console.log(`${PROGRAM}: ${message}`)
}
