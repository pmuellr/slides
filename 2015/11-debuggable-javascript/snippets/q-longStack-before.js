var Q = require("q")


function a() { Q.delay(100).done(b) }
function b() { throw new Error("foo") }

a()

// Error: foo
//     at b (.../script.js:5:22)
//     at _fulfilled (.../node_modules/q/q.js:787:54)
//     at self.promiseDispatch.done ...
//     at Promise.promise.promiseDispatch ...
//     ...
