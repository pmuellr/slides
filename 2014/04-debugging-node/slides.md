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

BlueMix Platform-as-a-Service and node.js

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

# diagnostics as code

(snippets available at [./snippets](snippets/index.html))

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

## winston

--------------------------------------------------------------------------------

## `Error.prepareStackTrace()`

```js
//!snippet: v8_prepareStackTrace.js
```

--------------------------------------------------------------------------------

## `Error.prepareStackTrace()`

before

```
Error: foo blatz
    at c (/fully/qualified/path/name/here/v8_prepareStackTrace.js:18:22)
    at b (/fully/qualified/path/name/here/v8_prepareStackTrace.js:17:16)
    at a (/fully/qualified/path/name/here/v8_prepareStackTrace.js:16:16)
    at Object.<anonymous> (/fully/qualified/path/name/here/v8_prepareStackTrace.js:4:7)
    ... many more lines ...
```

after

```
Error: foo blatz
   v8_prepareStackTrace.js  14 - c()
   v8_prepareStackTrace.js  13 - b()
   v8_prepareStackTrace.js  12 - a()
```

--------------------------------------------------------------------------------

## npm long-stack-traces

```js
//!snippet: long-stack-traces.js
```

--------------------------------------------------------------------------------

## `Error.prepareStackTrace()`

see also:

* .smaller[<https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi>]

* .smaller[.smaller[<https://mail.mozilla.org/pipermail/es-discuss/2014-March/036764.html>]]

--------------------------------------------------------------------------------

## Q longtraces

--------------------------------------------------------------------------------

## node-inspector

--------------------------------------------------------------------------------

## theseus

--------------------------------------------------------------------------------

## nodprof

--------------------------------------------------------------------------------

## testing

* mocha
* jasmine

--------------------------------------------------------------------------------

## hooking functions

https://www.npmjs.org/package/hooker

--------------------------------------------------------------------------------

class: center, middle

# `fin`
