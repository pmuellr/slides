#!/usr/bin/env node --inspect

'use strict'

module.exports = main

const AllTheThings = []

if (require.main === module) main()

function main () {
  setInterval(addThings, 100)
  setInterval(logStatus, 5000)
}

function addThings () {
  const name = `${new Date()}`
  const data = randomNumbers(100)

  AllTheThings.push(createThing1(name, data))
  AllTheThings.push(createThing2(name, data))
  AllTheThings.push(createThing3(name, data))
}

function logStatus () {
  console.log(`there are now ${AllTheThings.length} things`)
}

function createThing1 (name, data) {
  return { name, data }
}

function createThing2 (name, data) {
  return new Thing2(name, data)
}

class Thing2 {
  constructor (name, data) {
    this.name = name
    this.data = data
  }
}

function createThing3 (name, data) {
  const __type = new Thing3Tag()
  return { name, data, __type }
}

class Thing3Tag {}

function randomNumbers (count) {
  const result = []

  for (let i = 0; i < count; i++) {
    result.push(Math.random())
  }

  return result
}