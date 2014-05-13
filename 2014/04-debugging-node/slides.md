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

## `Error.prepareStackTrace()`

see also:

* .smaller[<https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi>]

* .smaller[.smaller[<https://mail.mozilla.org/pipermail/es-discuss/2014-March/036764.html>]]

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

--------------------------------------------------------------------------------

## builtin module `repl`

```js
//!snippet: repl.js
```

--------------------------------------------------------------------------------

## npm `winston`

```js
//!snippet: winston.js
```

--------------------------------------------------------------------------------

## testing

```js
//!snippet: testing.js
```

--------------------------------------------------------------------------------

## testing

* mocha - <http://visionmedia.github.io/mocha/>

* jasmine - <http://jasmine.github.io>

--------------------------------------------------------------------------------

## npm `hooker`

```js
//!snippet: hooker.js
```


--------------------------------------------------------------------------------

## node-inspector

--------------------------------------------------------------------------------

## theseus

--------------------------------------------------------------------------------

## nodprof

--------------------------------------------------------------------------------

class: center, middle

# `fin`
