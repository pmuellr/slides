var debugA = require("debug")("thing-A")
var debugB = require("debug")("thing-B")

function a() { debugA("thrashing") }
function b() { debugB("churning") }

setInterval(a, 500)
setInterval(b, 333)