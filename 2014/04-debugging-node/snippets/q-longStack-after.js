Q = require("q")
Q.longStackSupport = true

function a() { Q.delay(100).done(b) }
function b() { throw new Error("foo") }

a()

// Error: foo
//     at b (/Users/pmuellr/Projects/slides/2014/04-debugging-node/snippets/q-longStack-after.js:5:22)
// From previous event:
//     at a (/Users/pmuellr/Projects/slides/2014/04-debugging-node/snippets/q-longStack-after.js:4:29)
//     at Object.<anonymous> (/Users/pmuellr/Projects/slides/2014/04-debugging-node/snippets/q-longStack-after.js:7:1)