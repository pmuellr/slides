'use strict'

// should use --no-use-inlining node/v8 option to disable inlining

const path = require('path')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`
log('starting')

// 1 per second
setInterval(main, 1000 / 1)

function main () {
  a(); z(); z(); z()
}

function a () { doStuff(1); b(); doStuff(1) }
function b () { doStuff(2); c(); doStuff(2) }
function c () { doStuff(3); d(); doStuff(3) }
function d () { doStuff(4); e(); doStuff(4) }
function e () { doStuff(5); f(); doStuff(5) }
function f () { doStuff(6) }

function z () { doStuff(7); y(); doStuff(7) }
function y () { doStuff(8); x(); doStuff(8) }
function x () { doStuff(9) }

function doStuff (ms) {
  const timeStart = Date.now()
  while (Date.now() - timeStart < ms * factor) { /* noop */ }
}

const factor = 1

function log (message) {
  console.log(`${PROGRAM}:${process.pid} ${message}`)
}
