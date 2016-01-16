'use strict'

const path = require('path')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`
log(`starting`)

// 100 per second
setInterval(aFunction, 1000 / 100)

function aFunction () {
  const point = { x: 0, y: 0 }
  maybeLeakyFunction(point)
}

const LeakyCache = new Map()

function maybeLeakyFunction (object) {
  LeakyCache.set(object, LeakyCache.size)
}

function log (message) {
  console.log(`${PROGRAM}:${process.pid}: ${message}`)
}
