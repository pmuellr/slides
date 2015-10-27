var Q = require("q")
Q.longStackSupport = true

function a() { Q.delay(100).done(b) }
function b() { throw new Error("foo") }

a()

// Error: foo
//     at b (.../script.js.js:5:22)
// From previous event:
//     at a (.../script.js.js:4:29)
//     at Object.<anonymous> (.../script.js.js:7:1)
