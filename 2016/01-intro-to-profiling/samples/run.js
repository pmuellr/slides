#!/usr/bin/env nsolid
'use strict'

const path = require('path')
const events = require('events')
const child_process = require('child_process')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`

events.defaultMaxListeners = 100

spawn('cpu-hawg')
spawn('mem-hawg-A1')
spawn('mem-hawg-A2')
spawn('mem-hawg-B1')
spawn('mem-hawg-B2')

setTimeout(x => x, 1000 * 60 * 60 * 24)

function spawn (script, args, count) {
  if (!args) args = []
  if (!count) count = 1

  const origArgs = args.slice()

  args.unshift(script)
  args.unshift('--no-use-inlining')

  log(`spawning: nsolid ${args.join(' ')}`)
  const child = child_process.spawn('nsolid', args, { env: env(script) })
  child.stdout.pipe(process.stdout)
  child.stderr.pipe(process.stderr)

  count--
  if (count <= 0) return
  setTimeout(() => spawn(script, origArgs, count), 1000)
}

function env (appName) {
  const result = JSON.parse(JSON.stringify(process.env))
  result.NSOLID_HUB = 4001
  result.NSOLID_APPNAME = appName

  return result
}

function log (message) {
  console.log(`${PROGRAM}:${process.pid} ${message}`)
}
