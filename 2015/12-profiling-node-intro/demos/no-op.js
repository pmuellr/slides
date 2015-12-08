'use strict'

process.title = 'no-op'
console.log(`starting app: ${process.env.NSOLID_APPNAME}`)

const cluster = require('cluster')

const WORKERS = 3

cluster.isMaster ? master() : worker()

//------------------------------------------------------------------------------
function master() {
  for (let i=0; i<WORKERS; i++) {
    cluster.fork()
  }
}

//------------------------------------------------------------------------------
function worker() {
  setInterval(noop, 1000)
}

//------------------------------------------------------------------------------
function noop() {}
