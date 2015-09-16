"use strict"

class FakeTransaction {
  expensiveThing(cb) {
    setTimeout( () => this.expensiveThingDone(cb), 500)
    //                ^^^^ look ma, no bind() or self/that
  }

  expensiveThingDone(cb) {
    cb()
  }
}

new FakeTransaction().expensiveThing(
  () => console.log("expensive thing done!")
)

// prints: "expensive thing done"
