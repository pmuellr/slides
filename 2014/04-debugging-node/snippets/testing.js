#!/usr/bin/env node node_modules/.bin/mocha testing.js

var assert = require("assert")

describe("Array", function(){
  describe("#indexOf()", function(){
    it("should return -1 when the value is not present", function(){
      assert.equal(-1, [1,2,3].indexOf(1));
    })
  })
})

//  0 passing (3ms)
//  1 failing
//
//  1) Array #indexOf() should return -1 when the value is not present:
//     AssertionError: -1 == 0
//      at Context.<anonymous> (path/to/testing.js:7:14)
//      ...