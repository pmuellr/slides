#!/usr/bin/env node --inspect

'use strict'

module.exports = main

if (require.main === module) main()

function main () {
  setInterval(a, 1000)
}

function a () {
  b()
  c()
  b()
}

function b () {
  c()
}

function c () {
  sleep(200)
}

// waste time till ms have elapsed
function sleep (ms) {
  const dateEnd = Date.now() + ms
  while (Date.now() < dateEnd) {}
}
