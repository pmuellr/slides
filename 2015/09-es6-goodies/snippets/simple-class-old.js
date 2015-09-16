"use strict"

function Animal(name) {
  this.name = name
}

Animal.prototype.speak = function speak() {
  console.log("hi, my name is " + this.name)
}

new Animal("Bob").speak()

// prints: hi, my name is Bob
