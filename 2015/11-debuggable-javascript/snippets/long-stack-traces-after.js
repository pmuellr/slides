if (process.env.NODE_ENV !== 'production')
  require('longjohn')

a()
function a() { setTimeout(b, 100) }
function b() { setTimeout(c, 100) }
function c() { throw new Error("foo") }
// Error: foo
//     at [object Object].c (path/to/script.js:6:22)
//     at Timer.listOnTimeout (timers.js:92:15)
// ---------------------------------------------
//     at [object Object].b (path/to/script.js:5:16)
//     at Timer.listOnTimeout (timers.js:92:15)
// ---------------------------------------------
//     at a (path/to/script.js:4:16)
//     at Object.<anonymous> (path/to/script.js:2:1)
//     ...
