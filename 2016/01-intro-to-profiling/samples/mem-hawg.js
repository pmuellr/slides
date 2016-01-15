'use strict'

const path = require('path')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`
log(`starting`)

const LeakyObjectCache = new Map()
const LeakyModelCache = new Map()

// 100 per second
setInterval(main, 1000 / 100)

function main () {
  a(); b()
}

class TagObject {}

function a () {
  const object = { prop: "val" }
  object.__tag = new TagObject()
  LeakyObjectCache.set(object, {})
}

class Model { constructor () { this.odd = Date.now() % 2 }}
class TagModelExtraWork {}

function b () {
  const model = new Model()
  processModel(model)
  LeakyModelCache.set(model, {})
}

function processModel (model) {
  if (model.odd) return

  model.__tag = new TagModelExtraWork()
  // ...
}

function log (message) {
  console.log(`${PROGRAM}:${process.pid}: ${message}`)
}
