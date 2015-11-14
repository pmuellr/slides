'use strict'

const path = require('path')
const http = require('http')

const PROGRAM = path.basename(__filename)
process.title = PROGRAM

let   URL
const Requests = []

log('starting')

const server = http.createServer(requestHandler)
server.listen(0, listening)

//------------------------------------------------------------------------------
function listening() {
  const port = server.address().port
  URL = `http://localhost:${port}`
  log(`starting server at ${URL}`)
  setInterval(makeRequest, 100)
}

//------------------------------------------------------------------------------
function requestHandler(req, res) {
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
