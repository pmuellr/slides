function a() { b() }
function b() { c() }
function c() { console.trace("foo") }

a()

// prints
//
// Trace: foo
//     at c (<program>:3:24)
//     at b (<program>:2:16)
//     at a (<program>:1:78)
//     at ...