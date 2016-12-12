'use strict'

const http = require('http')

const PORT = process.env.PORT || "3000"

const server = http.createServer(onRequest)
server.listen(PORT, onListening)

// handle an HTTP request
function onRequest (req, res) {
  res.end('<h1>Hello, World</h1>')
}

// callback fired when server starts listening for requests
function onListening () {
  console.log(`Server listening on http://localhost:${server.address().port}`)
}
