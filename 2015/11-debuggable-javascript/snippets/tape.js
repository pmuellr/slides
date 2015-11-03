const test = require('tape')

//!show
test('Array #indexOf()', function(t) {
  t.equal(-1, [1,2,3].indexOf(1), 'should return -1 on not found')
  t.end()
})

// TAP version 13
// # Array #indexOf()
// not ok 1 should return -1 on not found
// ...
//
// 1..1
// # tests 1
// # pass  0
// # fail  1
