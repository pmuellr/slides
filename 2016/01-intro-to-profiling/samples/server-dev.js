'use strict'

// program doesn't do anything!

const path = require('path')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`
log('starting')

setInterval(noop, 10000)

function noop () {}

function log (message) {
  console.log(`${PROGRAM}:${process.pid}: ${message}`)
}
