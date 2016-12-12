'use strict'

const pkg = require('./package.json')
const http = require('http')
const cluster = require('cluster')

const PORT = process.env.PORT || "3000"
const WORKERS = 8

setImmediate(() => { cluster.isMaster ? forkWorkers() : runWorker() })

// fork the cluster workers
function forkWorkers () {
  process.title = `${pkg.name} master`

  for (let i = 0; i < WORKERS; i++) cluster.fork()
}

// run stuff for each cluster worker
function runWorker () {
  const worker = cluster.worker
  const server = http.createServer(onRequest)

  process.title = `${pkg.name} worker ${worker.id}`
  server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${server.address().port}`)
  })

  if (worker.id % 8 === 1) runBusy()
  if (worker.id % 8 === 2) runVuln()
}

// run consuming more cpu than neccessary
function runBusy () {
  setInterval(busy1, 50)
  setInterval(busy2, 50)
  setInterval(busy3, 50)

  function busy1() {
    const start = Date.now()
    while (Date.now() - start < 1) {}
  }

  function busy2() {
    const start = Date.now()
    while (Date.now() - start < 1) {}

    busy1()
    busy1()
  }

  function busy3() {
    const start = Date.now()
    while (Date.now() - start < 1) {}

    busy1()
    busy2()
  }
}

// force a vulnerability (vuln version of moment)
function runVuln () {
  require('moment')
}

// run consuming more memory than neccessary
function runHeavy () {
  const chunkCount = 200000
  const chunks = []

  for (let i = 0; i < chunkCount; i++) {
    chunks.push(new Chunk())
  }

  setInterval(stayHeavy, 1000)

  function stayHeavy () {
    chunks.push(new Chunk())
  }
}

// do nothing class that consumes memory
class Chunk {
  constructor () {
    this.data = new Date().toString().split('')
  }
}

// handle an HTTP request
function onRequest (req, res) {
  res.end('<h1>Hello, World</h1>')
}
