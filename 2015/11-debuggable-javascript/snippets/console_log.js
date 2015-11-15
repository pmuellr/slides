console.log(__filename + ": foo")
// prints: /path/to/script.js: foo

console.log("foo", "bar")
// prints: foo bar

console.log({x:1, y:2})
// prints: { x: 1, y: 2 }

console.log("a-%s-b %j", 1, {x:1})
// prints: a-1-b {"x":1}

console.log(process)
// prints: { title: 'node', ...many lines... }
