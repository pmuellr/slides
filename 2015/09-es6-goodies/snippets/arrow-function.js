const foo = ()    => console.log("in foo")
            // ~like function foo() { console.log(...) }
const bar = x     => console.log("in bar with", x)
            // ~like function bar(x) { console.log(...) }
const gru = (x,y) => console.log("in gru with", x, y)
            // ~like function gru(x,y) { console.log(...) }
const pup = () => {
  console.log("in pup with")
  console.log("...nothing")
}

foo(); bar(42); gru(1,99); pup()

// prints:
// in foo
// in bar with 42
// in gru with 1 99
// in pup with
// ...nothing
