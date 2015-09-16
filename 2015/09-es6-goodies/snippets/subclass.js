"use strict"

class Animal {
  species() {                 // <----------------
    throw new Error("subclass responsibiity") // h/t Smalltalk
  }
}

class Frog extends Animal {   // <----------------
  species() {                 // <----------------
    return "frog"
  }
}

console.log(new Frog().species())   // prints: frog
console.log(new Animal().species()) // throws error
