"use strict"
const LinePoster = require("./Line-Poster")

const p = LinePoster([])

p`Hello`
p`line number: ${1+1}`
p`Later`

console.log(p())
