'use strict'

// Note that if you profile this program, the functions f, e, d, c, then b will
// rapidly disappear from the trace, as V8 is inlining those functions.
// You can turn off this inlining by using the node option --no-use-inlining

const fs = require('fs')
const path = require('path')

const PROGRAM = path.basename(__filename)
process.title = PROGRAM

log('starting')

setInterval(a, 50)

//------------------------------------------------------------------------------
const COUNT = 2

function a() { for (let i=0; i<COUNT; i++) { b() } }
function b() { for (let i=0; i<COUNT; i++) { c() } }
function c() { for (let i=0; i<COUNT; i++) { d() } }
function d() { for (let i=0; i<COUNT; i++) { e() } }
function e() { for (let i=0; i<COUNT; i++) { f() } }

function f() {
  fs.readFileSync(__filename, 'utf8')
}

//------------------------------------------------------------------------------
function log(message) {
  console.log(`${PROGRAM}: ${message}`)
}
