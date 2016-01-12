#!/usr/bin/env nsolid
'use strict'

const path = require('path')
const child_process = require('child_process')

const PROGRAM = path.basename(__filename)
process.title = `nsolid_${PROGRAM}`

spawn('cpu-profile')
spawn('mem-hawg')

setTimeout(x => x, 1000 * 60 * 60 * 24)

function spawn (script, args, count) {
  if (!args) args = []
  if (!count) count = 1

  args.unshift(script)
  args.unshift('--no-use-inlining')

  log(`spawning: nsolid ${args.join(' ')}`)
  const child = child_process.spawn('nsolid', args, { env: env(script) })
  child.stdout.pipe(process.stdout)
  child.stderr.pipe(process.stderr)

  count--
  if (count <= 0) return
  setTimeout(() => spawn(count, script), 1000)
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
