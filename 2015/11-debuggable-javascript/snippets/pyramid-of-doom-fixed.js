//!hide
const fs = require("fs")
//!show
fs.readdir(".", function(err, files){
  files.forEach(function(file) {
    throw new Error("huh?")
  })
})

// Error: huh?
//   at path/to/script.js:6:11
//   at Array.forEach (native)
//   at path/to/script.js:5:9
//   at FSReqWrap.oncomplete (fs.js:82:15)
