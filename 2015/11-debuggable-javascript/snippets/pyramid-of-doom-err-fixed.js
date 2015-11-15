//!hide
const fs = require("fs")
//!show
fs.readdir(".", cbReadDir)
function cbReadDir(err, files) {
  files.forEach(eachFile)
}
function eachFile(file) {
  throw new Error("huh?")
}

// Error: huh?
//   at eachFile (path/to/script.js:9:9)
//   at Array.forEach (native)
//   at cbReadDir (path/to/script.js:6:9)
//   at FSReqWrap.oncomplete (fs.js:82:15)
