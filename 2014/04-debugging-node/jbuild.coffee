# Licensed under the Apache License. See footer for details.

path = require "path"
hljs = require "./snippets/node_modules/highlight.js"

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

WatchSpec = "shell.html slides.md snippets/ snippets/*.js snippets-shell.html"

#-------------------------------------------------------------------------------
mkdir "-p", "tmp"

#-------------------------------------------------------------------------------
tasks.build = ->
  buildSnippets()
  buildIndex()

#-------------------------------------------------------------------------------
buildIndex = ->
  log "building index.html from shell.html and slides.md"

  slides = cat "slides.md"
  slides = normalizeSlides slides

  shell = cat "shell.html"
  index = shell.replace "%slides.md%", slides

  chmod "+w", "index.html" if test "-f", "index.html"
  index.to "index.html"
  chmod "-w", "index.html"

#-------------------------------------------------------------------------------
normalizeSlides = (slides) ->
  lines = slides.split /\n/

  lines = lines.map (line) ->
    return line if line.length < 4
    return line unless line.match /(----*)|(====*)/
    return "---"

  return lines.join "\n"

#-------------------------------------------------------------------------------
buildSnippets = ->
  snippets = ls "snippets/*.js"

  sObject = {}
  sOutput = []

  for snippet in snippets
    baseName = path.basename snippet
    source = cat snippet
    sObject[baseName] = processSnippet source

    highlighted = hljs.highlight("js", source).value
    sOutput.push "<!-- ================================== -->"
    sOutput.push "<hr>"
    sOutput.push "<h2>#{baseName}<h2>"
    sOutput.push "<div class='indent smaller'><a href='snippets/#{baseName}'>link</a></div>"
    sOutput.push "<pre><code>#{highlighted}</code></pre>"
    sOutput.push ""

  sOutput = sOutput.join "\n"

  snippets = JSON.stringify(sObject, null, 4)
  snippets = "Snippets = #{snippets}"

  chmod "+w", "snippets.js" if test "-f", "snippets.js"
  snippets.to "snippets.js"
  chmod "-w", "snippets.js"

  chmod "+w", "snippets.html" if test "-f", "snippets.html"
  snippetsHtml = cat "snippets-shell.html"
  snippetsHtml = snippetsHtml.replace "%snippets%", sOutput
  snippetsHtml.to "snippets.html"
  chmod "-w", "snippets.html"

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
