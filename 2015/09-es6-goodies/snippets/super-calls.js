"use strict"

class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log("hi, I'm " + this.name)
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name)     // <--------------
  }
}

new Frog("Bob").speak()   // prints: hi, I'm Bob
