#!/usr/bin/env node

'use strict'

module.exports = main

if (require.main === module) main()

async function main () {
  while (true) {
    console.log(`sleeping at ${new Date()}`)
    await sleep(2000)
  }
}

// async function which resolves after ms milliseconds
async function sleep (ms) {
  await sleepAsync(ms / 2)
  sleepSync(ms / 2)
}

// function which returns a promise which resolves after a timeout
async function sleepAsync (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// function which is a spin loop returning after specified millis
function sleepSync (ms) {
  const dateEnd = Date.now() + ms
  while (Date.now() < dateEnd) {}
}