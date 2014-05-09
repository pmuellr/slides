# Licensed under the Apache License. See footer for details.

path = require "path"

#-------------------------------------------------------------------------------
# use this file with jbuild: https://www.npmjs.org/package/jbuild
# install jbuild with:
#    linux/mac: sudo npm -g install jbuild
#    windows:        npm -g install jbuild
#-------------------------------------------------------------------------------

#-------------------------------------------------------------------------------
tasks = defineTasks exports,
  tools:  "get the tools"

#-------------------------------------------------------------------------------
mkdir "-p", "tmp"

#-------------------------------------------------------------------------------
tasks.tools = ->
  get_jquery "2.1.1"
  get_remark "0.6.4"
  get_remark "0.6.5"
  get_glyphicons()

#-------------------------------------------------------------------------------
get_glyphicons = ->
  log "installing glyphicons free"

  exec "curl -o tmp/gif.zip http://glyphicons.com/files/glyphicons_free.zip"
  rm "-rf", "glyphicons_free"
  exec "unzip -q tmp/gif.zip"

  files = ls "-R", "glyphicons_free"
  files = files.filter (file) -> file.match /\.png$/
  files = files.map (file) ->
    "<img src='#{file}' title='#{path.basename file}'>"

  prefix = "<style> img { padding: 5;} </style>"

  output = prefix + "\n" + (files.join "\n")

  output.to "glyphicons_free/preview.html"

  console.log ""

#-------------------------------------------------------------------------------
get_jquery = (version) ->
  log "installing jquery #{version}"

  rm "-rf", "bower_components/jquery"
  exec "bower install jquery##{version}"
  cleanDir "lib/jquery/#{version}"
  cp "-R", "bower_components/jquery/dist/*", "lib/jquery/#{version}"

  console.log ""

#-------------------------------------------------------------------------------
get_remark = (version) ->
  log "installing remark #{version}"

  cleanDir "remark/#{version}"
  exec "curl -o remark/#{version}/remark.min.js http://gnab.github.io/remark/downloads/remark-#{version}.min.js"

  console.log ""

#-------------------------------------------------------------------------------
get_reveal = (version) ->
  log "installing reveal.js #{version}"

  rm "-rf", "bower_components/reveal.js"
  exec "bower install reveal.js##{version}"
  cleanDir "reveal.js/#{version}"
  cp "-R", "bower_components/reveal.js/*", "reveal.js/#{version}"

  console.log ""

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
