'use strict'

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
