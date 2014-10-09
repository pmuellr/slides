var http = require("http")

http.createServer(function (request, response) {
  response.writeHead(200, {
    "Content-Type":                "text/event-stream",
    "Access-Control-Allow-Origin": "*"
  })
  setInterval(function(){sendMessage(response)}, 1000)
}).listen(3000)

console.log("server running at http://localhost:3000")

//--------------------------------------------------------
function sendMessage(response) {
  response.write("data: the time is " + new Date + "\n\n")
}
