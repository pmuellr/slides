'use strict'

const path = require('path')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`
log(`starting`)

// 100 per second
setInterval(aFunction, 1000 / 100)

class Point2D {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

class Point3D extends Point2D {
  constructor (x, y, z) {
    this.z = z
  }
}

function aFunction (x,y) {
  const point = new Point2D(x, y)
  maybeLeakyFunction(point)
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
