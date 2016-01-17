'use strict'

const path = require('path')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`
log(`starting`)

// 100 per second
setInterval(aFunction, 1000 / 100)

class TagPoint2D {}
class TagPoint3D {}

function aFunction (someX, someY, someZ) {
  const point2D = { x: someX, y: someY }
  const point3D = { x: someX, y: someY, z: someZ }

  point2D.__tag = new TagPoint2D()
  point3D.__tag = new TagPoint3D()

  maybeLeakyFunction(point2D)
}

const LeakyCache = new Map()

function maybeLeakyFunction (object) {
  LeakyCache.set(object, LeakyCache.size)
}

function log (message) {
  console.log(`${PROGRAM}:${process.pid}: ${message}`)
}
