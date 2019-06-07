#!/usr/bin/env node

'use strict'

module.exports = main

const AllTheThings = []

if (require.main === module) main()

function main () {
  setInterval(onInterval, 100)
}

function onInterval () {
  const name = `${new Date()}`
  AllTheThings.push(createThing1(name))
  AllTheThings.push(createThing2(name))

  if (AllTheThings.length % 100 !== 0) return

  console.log(`there are now ${AllTheThings.length} things`)
}

function createThing1 (name) {
  return { name }
}

function createThing2 (name) {
  return new Thing1(name)
}

class Thing1 {
  constructor (name) {
    this.name = name
  }
}