'use strict'

const path = require('path')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`
log(`starting`)

// 100 per second
setInterval(aFunction, 1000 / 100)

class Point {
  constructor () {
    this.x = Math.random() * 100
    this.y = Math.random() * 100
  }
}

function aFunction () {
  const point = new Point()

  if (point.x > 25) {
    processPointA(point)
  } else {
    processPointB(point)
  }
}

function processPointA (point) {
  maybeLeakyFunction(point)
}

function processPointB (point) {
  maybeNotLeakyFunction(point)
}

const LeakyCache = new Map()

function maybeLeakyFunction (object) {
  LeakyCache.set(object, LeakyCache.size)
}

function maybeNotLeakyFunction (object) {
}

function log (message) {
  console.log(`${PROGRAM}:${process.pid}: ${message}`)
}
