'use strict'

const path = require('path')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`
log(`starting`)

// 100 per second
setInterval(main, 1000 / 100)

function main () {
  a(); b()
}

class TagLiteralPoint {}

function a () {
  const point = { x: 0, y: 0 }
  point.__tag = new TagLiteralPoint()
  maybeLeakyFunction(point)
}

class Point {
  constructor () {
    this.x = Math.random() * 100
    this.y = Math.random() * 100
  }
}

class TagProcessedPointA {}
class TagProcessedPointB {}

function b () {
  const point = new Point()

  if (point.x > 25) {
    processPointA(point)
  } else {
    processPointB(point)
  }
}

function processPointA (point) {
  point.__tag = new TagProcessedPointA()
  maybeLeakyFunction(point)
}

function processPointB (point) {
  point.__tag = new TagProcessedPointB()
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
