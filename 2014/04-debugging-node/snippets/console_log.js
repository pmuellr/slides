console.log("foo")
// prints: foo

console.log("foo", "bar")
//! prints: foo bar

console.log("a-%s-b-%j-c", 1, {x:1})
//! prints: a-1-b-{"x":1}-c

console.log(process)
//! prints: { title: 'node', ...many lines... }