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
  build:  "build the slides"
  watch:  "watch for source changes, run build"

WatchSpec = "snippets snippets/**/*.js"

#-------------------------------------------------------------------------------
mkdir "-p", "tmp"

#-------------------------------------------------------------------------------
tasks.build = ->
  buildSnippets()

#-------------------------------------------------------------------------------
buildSnippets = ->
  snippets = ls "snippets/*.js"

  sObject = {}
  index = []
  index.push "<!-- generated on #{new Date()} -->"
  index.push "<h1>snippets</h1>"
  index.push "<ul>"

  for snippet in snippets
    baseName = path.basename snippet
    sObject[baseName] = processSnippet cat snippet

    index.push "<li><a href='#{baseName}'>#{baseName}</a>"

  snippets = JSON.stringify(sObject, null, 4)
  snippets = "Snippets = #{snippets}"
  snippets.to "snippets.js"

  index.push "</ul>"
  index = index.join "\n"
  index.to "snippets/index.html"

#-------------------------------------------------------------------------------
processSnippet = (source) ->
  iLines = source.split "\n"
  oLines = []

  show = true
  for line in iLines
    tLine = line.trim()
    switch tLine
      when "//!show" then show = true
      when "//!hide" then show = false
      else
        oLines.push line if show

  return oLines.join "\n"

#-------------------------------------------------------------------------------
watchIter = ->
  tasks.build()

#-------------------------------------------------------------------------------
tasks.watch = ->
    watchIter()

    watch
        files: WatchSpec.split " "
        run:   watchIter

    watchFiles "jbuild.coffee" :->
        log "jbuild file changed; exiting"
        process.exit()

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
