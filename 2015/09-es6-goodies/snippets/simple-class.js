"use strict"

class Animal {

  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`hi, my name is ${this.name}`)
  }
}

new Animal("Bob").speak()

// prints: hi, my name is Bob
