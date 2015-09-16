"use strict"


// old school push-lines-to-array, join-when-done

const lines = []

lines.push("Hello")
lines.push("line number: " + (1+1))
lines.push("Later")

console.log(lines.join('\n'))

// prints:
//   Hello
//   line number: 2
//   Later
