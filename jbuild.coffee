# Licensed under the Apache License. See footer for details.

path = require "path"

buildSlides = require "./build-slides"

#-------------------------------------------------------------------------------
# use this file with jbuild: https://www.npmjs.org/package/jbuild
# install jbuild with:
#    linux/mac: sudo npm -g install jbuild
#    windows:        npm -g install jbuild
#-------------------------------------------------------------------------------

WatchSpec = "20??/**/slides.md"

#-------------------------------------------------------------------------------
tasks = defineTasks exports,
  #watch:          "watch for source file changes, then run build"
  build:          "run a build"
  tools:          "get the tools"

#-------------------------------------------------------------------------------
mkdir "-p", "tmp"

#-------------------------------------------------------------------------------
tasks.tools = ->
  get_reveal_262()
  # get_remark_064()

#-------------------------------------------------------------------------------
tasks.build = (iFile) ->
  # buildSlides.main [iFile]

#-------------------------------------------------------------------------------
tasks.watch = ->

  watch
    files: WatchSpec.split " "
    run:   tasks.build

  watchFiles "jbuild.coffee" :->
    log "jbuild file changed; exiting"
    process.exit 0

#-------------------------------------------------------------------------------
cleanDir = (dir) ->
  mkdir "-p", dir
  rm "-rf", "#{dir}/*"

#-------------------------------------------------------------------------------
get_reveal_262 = ->
  get_reveal "2.6.2"

#-------------------------------------------------------------------------------
get_reveal = (version) ->
  log "installing reveal.js #{version}"

  rm "-rf", "bower_components/reveal.js"
  exec "bower install reveal.js##{version}"
  cleanDir "reveal.js/#{version}"
  cp "-R", "bower_components/reveal.js/*", "reveal.js/#{version}"

  console.log ""

#-------------------------------------------------------------------------------
get_remark_064 = ->
  get_remark "0.6.4"

#-------------------------------------------------------------------------------
get_remark = (version) ->
  log "installing remark #{version}"

  rm "-rf", "bower_components/remark"
  exec "bower install remark##{version}"
  cleanDir "remark/#{version}"
  cp "-R", "bower_components/remark/*", "remark/#{version}"

  console.log ""

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
