'use strict'

const http = require('http')
const path = require('path')

const express = require('express')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`
log('starting')

let Port = 0
const app = express()
app.get('/', handleRequest)

const server = http.createServer(app)

server.listen(Port, function () {
  Port = server.address().port
  log(`server listening on http://localhost:${Port}`)

  setInterval(sendRequests, 1000 / 100) // 100 per sec
})

class Model {}

const LeakyModelCache = new Map()
const LeakyObjectCache = new Map()

class ModelTag {}
class ObjectTag {}

function handleRequest (req, res) {
  const instance = new Model()
  instance.__tag = new ModelTag()
  LeakyModelCache.set(instance, {})

  const object = { path: req.path }
  object.__tag = new ObjectTag()
  LeakyObjectCache.set(object, {})

  res.end('Hello, world!')
}


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
