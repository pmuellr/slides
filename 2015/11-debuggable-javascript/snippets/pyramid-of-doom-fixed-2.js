//!hide
const fs = require("fs")
//!show
fs.readdir(".", cbReadDir)
function cbReadDir(err, files) {
  files.forEach(eachFile)
}
function eachFile(file) {
  fs.stat(file, cbStatFile)
  function cbStatFile(err, stats) {
    if (!stats.isFile()) return
    fs.readFile(file, "utf8", cbReadFile)
  }
  function cbReadFile(err, data) {
    console.log(file, data.length)
  }
}
