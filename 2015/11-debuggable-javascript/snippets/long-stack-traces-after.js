require("long-stack-traces")
a()

function a() { setTimeout(b, 100) }
function b() { setTimeout(c, 100) }
function c() { throw new Error("foo") }

// Uncaught Error: foo
//     at [object Object].c (/path/to/long-stack-traces.js:7:22)
//     at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)
// ----------------------------------------
//     at Object.setTimeout
//     at [object Object].b (/path/to/long-stack-traces.js:5:16)
//     at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)
// ----------------------------------------
//     at Object.setTimeout
//     at a (/path/to/long-stack-traces.js:3:16)
//     ...