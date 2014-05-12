Q = require("q")


function a() { Q.delay(100).done(b) }
function b() { throw new Error("foo") }

a()

// Error: foo
//     at b (/Users/pmuellr/Projects/slides/2014/04-debugging-node/snippets/q-longStack-before.js:5:22)
//     at _fulfilled (/Users/pmuellr/Projects/slides/2014/04-debugging-node/snippets/node_modules/q/q.js:787:54)
//     at self.promiseDispatch.done (/Users/pmuellr/Projects/slides/2014/04-debugging-node/snippets/node_modules/q/q.js:816:30)
//     at Promise.promise.promiseDispatch (/Users/pmuellr/Projects/slides/2014/04-debugging-node/snippets/node_modules/q/q.js:749:13)
//     at /Users/pmuellr/Projects/slide