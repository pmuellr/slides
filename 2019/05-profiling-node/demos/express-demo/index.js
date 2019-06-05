'use strict'

const url = require('url')
const path = require('path')
const http = require('http')
const express = require('express')

const app = express()

const PORT = process.env.PORT || "3000"
const URL = `http://localhost:${PORT}/`
const CHECK_FINISHED_MS = 5 * 60 * 1000 // 5 minutes
const SIMULATE_CLIENT = true

process.title = path.basename(__dirname)

app.use(ensureFinished)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.get('/', renderPage)

const server = app.listen(PORT, onServerListening)

// simulate 10 clients per second making requests
if (SIMULATE_CLIENT) {
  setInterval(simulateClient, 100)
}

// simulate a client making a GET / request, as a built-in performance tester
function simulateClient () {
  http.get(URL, (res) => null)
}

// render the main page
function renderPage (req, res) {
  res.render('index')
}

// print a message when the server starts
function onServerListening () {
  console.log(`Example app listening at ${URL}`)
}

// check every request to make sure it actually finished
function ensureFinished (req, res, next) {
  setTimeout(checkFinished, CHECK_FINISHED_MS)
  next()

  function checkFinished () {
    if (!res.finished) {
      console.log('processing for ${req.method} ${req.url} never finished!')
    }
  }
}
