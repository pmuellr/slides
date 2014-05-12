function a() { b() }
function b() { c() }
function c() { throw new Error("foo blatz") }

try { a() } catch(err) { console.log(err.stack) }
// prints:
// Error: foo blatz
//    v8_prepareStackTrace.js  14 - c()
//    v8_prepareStackTrace.js  13 - b()
//    v8_prepareStackTrace.js  12 - a()
