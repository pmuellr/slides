"use strict"
const LinePoster = require("./Line-Poster")

// new school push-lines-to-array, join-when-done

const p = LinePoster()

p`Hello`
p`line number: ${1+1}`
p`Later`

console.log(p())

// prints:
//   Hello
//   line number: 2
//   Later
