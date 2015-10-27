//!hide
// node node_modules/.bin/mocha testing.js
var assert = require("assert")

//!show
describe("Array", function(){
  describe("#indexOf()", function(){
    it("should return -1 on not found", function(){
      assert.equal(-1, [1,2,3].indexOf(1));
    })
  })
})

//  0 passing (3ms)
//  1 failing
//
//  1) Array #indexOf() should return -1 on not found:
//     AssertionError: -1 == 0
//      at Context.<anonymous> (.../script.js:7:14)
//      ...
