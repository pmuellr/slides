//!hide
const fs = require("fs")
//!show
fs.readdir(".", function(err, files){
  files.forEach(function(file) {
    fs.stat(file, function(err, stats){
      if (!stats.isFile()) return
      fs.readFile(file, "utf8", function(err, data){
        console.log(file, data.length)
      })
    })
  })
})
