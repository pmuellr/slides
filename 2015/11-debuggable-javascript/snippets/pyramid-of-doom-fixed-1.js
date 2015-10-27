//!hide
const fs = require("fs")
//!show
fs.readdir(".", cbReadDir)
function cbReadDir(err, files) {
  files.forEach(eachFile)
}
function eachFile(file) {
  fs.stat(file, (err, stats) => cbStatFile(err, stats, file))
}
function cbStatFile(err, stats, file) {
  if (!stats.isFile()) return
  fs.readFile(file, "utf8", (err, data) => cbReadFile(err, data, file))
}
function cbReadFile(err, data, file) {
  console.log(file, data.length)
}
