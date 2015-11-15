
a()

function a() { setTimeout(b, 100) }
function b() { setTimeout(c, 100) }
function c() { throw new Error("foo") }

// Error: foo
//     at c [as _onTimeout] (/path/to/script.js:6:22)
//     at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)
