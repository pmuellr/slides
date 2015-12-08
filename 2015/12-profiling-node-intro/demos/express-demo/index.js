'use strict'

console.log(`starting app: ${process.env.NSOLID_APPNAME}`)

const path = require('path')
const http = require('http')
const express = require('express')

const app = express()

const PORT = process.env.PORT || "8000"
const URL = `http://localhost:${PORT}`

process.title = path.basename(__dirname)

app.set('view engine', 'jade')
app.use(cacheRequest)
app.get('/', renderPage)

const server = app.listen(PORT, onServerListening)

setInterval(pingServer, 333)

// -----------------------------------------------------------------------------
function renderPage (req, res) {
  res.render('index')
}

// -----------------------------------------------------------------------------
function pingServer () {
  http.get(URL, res => null)
}

// -----------------------------------------------------------------------------
function onServerListening () {
  console.log(`Example app listening at ${URL}`)
}

// -----------------------------------------------------------------------------
const Requests = []
function cacheRequest (req, res, next) {
  req.__tag = new TagRequest()
  Requests.push(req)
  next()
}

// -----------------------------------------------------------------------------
class TagRequest {}
