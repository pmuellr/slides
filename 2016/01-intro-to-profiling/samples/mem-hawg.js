'use strict'

const http = require('http')
const path = require('path')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`
log('starting')

let Port = 0

const server = http.createServer(handleRequest)

server.listen(Port, function () {
  Port = server.address().port
  log(`server listening on http://localhost:${Port}`)

  setInterval(sendRequests, 50)
})

function handleRequest (req, res) {
  req.__tag = new RequestTag()
  Cache.push(req)

  doStuff(300000) // 300,000 ns = 0.3 ms
  res.end('Hello, world!')
}

const Cache = []

class RequestTag {}

function sendRequests () {
  http.request(`http://localhost:${Port}/`, res => null).end()
}

function doStuff (ns) {
  const timeStart = process.hrtime()
  while (process.hrtime(timeStart)[1] < ns) { /* noop */ }
}

function log (message) {
  console.log(`${PROGRAM}:${process.pid}: ${message}`)
}
