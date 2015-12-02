'use strict'

const path = require('path')
const cluster = require('cluster')
const child_process = require('child_process')

const apps = [
  {name: 'express-demo', dir: 'express-demo', program: 'index'},
  {name: 'express-demo-opt', dir: 'express-demo', program: 'index-opt'},
  // {name: 'profile-inline'},
  // {name: 'profile-no-inline', args: ['--no-use-inlining']},
  // {name: 'snapshot-untagged'},
  // {name: 'snapshot-tagged'},
]

cluster.isMaster ? master() : worker()

//------------------------------------------------------------------------------
function master() {
  cluster.on('exit', workerExited)

  for (let app of apps) {
    cluster.fork()
  }
}

//------------------------------------------------------------------------------
function worker() {
  const app = apps[cluster.worker.id - 1]
  const name = app.name
  const program = app.program || name
  const dir = path.join(__dirname, app.dir || ".")

  const args = app.args || []
  args.push(program)

  const env  = JSON.parse(JSON.stringify(process.env))
  env.NSOLID_APPNAME = name
  env.NSOLID_HUB     = 4001

  const opts = {
    env: env,
    cwd: dir,
    stdio: 'inherit',
  }

  child_process.spawnSync('node', args, opts)
}

//------------------------------------------------------------------------------
function workerExited(worker, code, signal) {
  const app = apps[cluster.worker.id - 1]
  console.log('worker %s died: %s', app, signal || code)
}
