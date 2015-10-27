const debugA = require("debug")("thing-A")
const debugB = require("debug")("thing-B")

function a() { debugA("thrashing") }
function b() { debugB("churning") }

setInterval(a, 500); setInterval(b, 333)
