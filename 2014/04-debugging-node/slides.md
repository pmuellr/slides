class: center, middle

# `work`
# `in`
# `progress`

--------------------------------------------------------------------------------

# debugging node

### tips and tools for debugging your node programs

&nbsp;

Patrick Mueller
-
IBMer
-
[`@pmuellr`](https://twitter.com/pmuellr)
-
[`muellerware.org`](http://muellerware.org)

.smaller[.smaller[
<http://pmuellr.github.io/slides/2014/04-debugging-node>
]]

.no-print.smaller[.smaller[
<!-- [{pdf}](index.pdf) -->
]]

--------------------------------------------------------------------------------

layout: true

<div class="page-icon">
  <img id="ibm-8-bar-icon" height=24 src="../../images/ibm-8-bar-trans.png">
  &nbsp;
  <img height=24 src="../../images/js.png">
  &nbsp;
</div>

--------------------------------------------------------------------------------

## Patrick Mueller

developer advocate at IBM

Raleigh, NC

more of my slides: <http://pmuellr.github.io/slides>

<div class="no-print">
<hr>
<table>
<tr><td>
&nbsp;display ratio:&nbsp;
<td>
<input id="button-display-ratio-4"  type="radio" name="display-ratio" value="4:3">  4:3
&nbsp;&nbsp;
<input id="button-display-ratio-16" type="radio" name="display-ratio" value="16:9"> 16:9
<tr><td>
&nbsp;clicker mode:&nbsp;
<td>
<input id="button-clicker" type="checkbox" value="toggle">
</table>
</div>

--------------------------------------------------------------------------------

## what is BlueMix?

<img src="../../images/bluemix.png" width=256 style="background: #fff; float: right">

Platform-as-a-Service product

Runs node apps! Runs any apps!

Based on the [Cloud Foundry](http://cloudfoundry.org) open source project

For more info: <https://bluemix.net>

--------------------------------------------------------------------------------

## attribution

JS Logo from <https://github.com/voodootikigod/logo.js>

Slide framework from <http://remarkjs.com/>

GlyphIcons Free from <http://glyphicons.com/>

--------------------------------------------------------------------------------

class: center, middle

# snippets

available at [./snippets.html](snippets.html)



================================================================================

class: center, middle

# logging

--------------------------------------------------------------------------------

## `alert()`

```js
//!snippet: alert.js
```

--------------------------------------------------------------------------------

## `console.log()`

```js
//!snippet: console_log.js
```

--------------------------------------------------------------------------------

## `console.time()`

```js
//!snippet: console_time.js
```

--------------------------------------------------------------------------------

## `console.trace()`

```js
//!snippet: console_trace.js
```

--------------------------------------------------------------------------------

## npm `winston`

```js
//!snippet: winston.js
```



================================================================================

class: center, middle

# error handling

--------------------------------------------------------------------------------

### `Error.prepareStackTrace()` - before

```js
//!snippet: v8_prepareStackTrace-before.js
```

--------------------------------------------------------------------------------

### `Error.prepareStackTrace()` - after

```js
//!snippet: v8_prepareStackTrace-after.js
```

--------------------------------------------------------------------------------

## `Error.prepareStackTrace()`

see also:

* .smaller[<https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi>]

* .smaller[.smaller[<https://mail.mozilla.org/pipermail/es-discuss/2014-March/036764.html>]]

--------------------------------------------------------------------------------

### npm `long-stack-traces` - before

```js
//!snippet: long-stack-traces-before.js
```

--------------------------------------------------------------------------------

### npm `long-stack-traces` - after

```js
//!snippet: long-stack-traces-after.js
```

--------------------------------------------------------------------------------

### npm `Q.longStackSupport` - before

```js
//!snippet: q-longStack-before.js
```

--------------------------------------------------------------------------------

### npm `Q.longStackSupport` - after

```js
//!snippet: q-longStack-after.js
```



================================================================================

class: center, middle

# testing

--------------------------------------------------------------------------------

## testing

```js
//!snippet: testing.js
```

--------------------------------------------------------------------------------

## testing

* mocha - <http://visionmedia.github.io/mocha/>

* jasmine - <http://jasmine.github.io>



================================================================================

class: center, middle

# etc

--------------------------------------------------------------------------------

## builtin module `repl`

```js
//!snippet: repl.js
```

--------------------------------------------------------------------------------

## builtin debugger

```js
//!snippet: debugger.js
```

--------------------------------------------------------------------------------

## builtin debugger

```js
// node debug debugger.js
// < debugger listening on port 5858
// ...
// debug> watch("x")
// debug> next
// break in debugger.js:3
// Watchers:
//   0: x = "<error>"
//
//   1 function a() {
//   2 	debugger
//   3 	x = 1
//   4 	y = 2
// debug> next
// break in debugger.js:4
// Watchers:
//   0: x = 1
//   ... lines ...
// debug> cont
// < 1 + 2 = 3
```

--------------------------------------------------------------------------------

## npm `hooker`

```js
//!snippet: hooker.js
```

--------------------------------------------------------------------------------

## npm `hooker`

```js
// prints:
//
// Math.max(5, 6, 7) called
// Math.max() returned: 7
// Math.sqrt(2) called
// Math.sqrt() returned: 1.4142135623730951
```

also provides

* filtering arguments
* overriding results
* https://github.com/cowboy/javascript-hooker

--------------------------------------------------------------------------------

## node 0.12 module `tracing`

```js
//!snippet: node-12-tracing.js
```

--------------------------------------------------------------------------------

## node 0.12 module `tracing`

```js
// prints:
//
// before: [object Timer]
// before: [object Object]
// after:  [object Object]
// after:  [object Timer]
// before: [object Timer]
// before: [object Object]
// after:  [object Object]
// after:  [object Timer]
...
```

--------------------------------------------------------------------------------

## node 0.12 module `tracing`

* <http://nodejs.org/dist/v0.11.13/docs/api/tracing.html>

* allows userdata to be associated with a handler

* has event emitter `v8` which emits GC information



================================================================================

class: center, middle

# tools

--------------------------------------------------------------------------------

## node-inspector

* reuses the user interface from Chrome Dev Tools
* set breakpoints
* watch expressions
* <https://github.com/node-inspector/node-inspector>

```
sudo npm -g install node-inspector
...
node-debug program.js
```

--------------------------------------------------------------------------------

<img src="images/node-inspector.png" width="100%">

--------------------------------------------------------------------------------



## theseus

--------------------------------------------------------------------------------

## nodprof

```
nodprof --serve --port 8081&
open http://localhost:8081
...
nodprof `which npm` info grunt
```

sample: http://muellerware.org/nodprof-static/

for more info:

* <https://github.com/pmuellr/nodprof>
* .smaller[.smaller[<https://code.google.com/p/v8/source/browse/trunk/include/v8-profiler.h>]]
* other profilers

--------------------------------------------------------------------------------

<img src="images/nodprof.png" width="100%">

================================================================================

class: center, middle

# `fin`
