# Licensed under the Apache License. See footer for details.

#-------------------------------------------------------------------------------
# use this file with jbuild: https://www.npmjs.org/package/jbuild
# install jbuild with:
#    linux/mac: sudo npm -g install jbuild
#    windows:        npm -g install jbuild
#-------------------------------------------------------------------------------

#-------------------------------------------------------------------------------
tasks = defineTasks exports,
  watch:          "watch for source file changes, then run build"
  build:          "run a build"
  get_reveal_262: "install reveal.js 2.6.2"

WatchSpec = "lib-src/**/* www-src/**/* tests/**/* vcap-services-local.coffee"

#-------------------------------------------------------------------------------
mkdir "-p", "tmp"

#-------------------------------------------------------------------------------
tasks.get_reveal_262 = ->
  get_reveal "2.6.2"

#-------------------------------------------------------------------------------
get_reveal = (version) ->
  rm "-rf", "bower_components/reveal.js"
  exec "bower install reveal.js##{version}"
  cleanDir "reveal.js/#{version}"
  cp "-R", "bower_components/reveal.js/*", "reveal.js/#{version}"

#-------------------------------------------------------------------------------
tasks.build = ->
  mkdir "-p", "tmp"

  log "running build"

  unless test "-d", "node_modules"
    exec "npm install"

    log ""
    log "---------------------------------------------------"
    log "exiting jbuild because of `npm install`, try again!"
    log "---------------------------------------------------"

    process.exit 1

  #----------------------------------
  log "- compiling server coffee files"

  cleanDir "lib"

  {code, output} = coffee "--compile --bare --output lib lib-src/*.coffee", silent: true
  return log "error:\n#{output}" if code

  #----------------------------------
  log "- building front-end"

  cleanDir "www"

  cp "-R", "www-src/*", "www"
  copyBowerFiles "www/bower"

  #----------------------------------
  log " - ang-tangling"
  cp "package.json", "www/ang"
  {code, output} = pexec "ang-tangle www/ang www/index.js"
  return log "error:\n#{output}" if code
  rm "-rf", "www/ang"

  #----------------------------------
  log " - browserify'ing"

  modules = "events path util underscore"
  modules = modules.split " "

  args = modules.map (module) -> "--require #{module}"
  args.push "--outfile tmp/node-modules.js"
  args.push "--debug"
  args.push "--insert-globals"

  {code, output} = browserify args.join " "
  return log "error:\n#{output}" if code

  {code, output} = pexec "cat-source-map --fixFileNames tmp/node-modules.js www/node-modules.js"
  return log "error:\n#{output}" if code

#-------------------------------------------------------------------------------
tasks.watch = ->
  watchIter()

  watch
    files: WatchSpec.split " "
    run:   watchIter

  watchFiles "jbuild.coffee" :->
    log "jbuild file changed; exiting"
    process.exit 0

#-------------------------------------------------------------------------------
tasks.serve = ->
  log "running server"

  command = "server --verbose --serve"
  #command = "lib/db"
  server.start "tmp/server.pid", "node", command.split " "

#-------------------------------------------------------------------------------
tasks.test = ->
  log "running tests"

  tests = "tests/test-*.coffee"

  options =
    ui:         "bdd"
    reporter:   "spec"
    slow:       300
    compilers:  "coffee:coffee-script"
    require:    "coffee-script/register"

  options = for key, val of options
    "--#{key} #{val}"

  options = options.join " "

  mocha "#{options} #{tests}", silent:true, (code, output) ->
    console.log "test results:\n#{output}"

#-------------------------------------------------------------------------------
copyBowerFiles = (dir) ->

  bowerConfig = require "./bower-config"

  cleanDir dir

  for name, {version, files} of bowerConfig
    unless test "-d", "bower_components/#{name}"
      exec "bower install #{name}##{version}"
      log ""

  for name, {version, files} of bowerConfig
    for src, dst of files
      src = "bower_components/#{name}/#{src}"

      if dst is "."
        dst = "#{dir}/#{name}"
      else
        dst = "#{dir}/#{name}/#{dst}"

      mkdir "-p", dst

      cp "-R", src, dst

#-------------------------------------------------------------------------------
watchIter = ->
  log "starting build at #{new Date()}"
  code = tasks.build()
  # return if code

  tasks.test()
  tasks.serve()

#-------------------------------------------------------------------------------
cleanDir = (dir) ->
  mkdir "-p", dir
  rm "-rf", "#{dir}/*"

#-------------------------------------------------------------------------------
# Copyright Patrick Mueller 2014
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#-------------------------------------------------------------------------------
