# making your JavaScript debuggable

Patrick Mueller
[`@pmuellr`](https://twitter.com/pmuellr),
[`muellerware.org`](http://muellerware.org)<br>
senior node engineer at [NodeSource](https://nodesource.com)<br>

<div class="smaller"><div class="smaller"><div class="smaller">
<a href="http://pmuellr.github.io/slides/2015/11-debuggable-javascript">
         http://pmuellr.github.io/slides/2015/11-debuggable-javascript
</a>
<br>
<a href="http://pmuellr.github.io/slides/2015/11-debuggable-javascript/slides.pdf">
         http://pmuellr.github.io/slides/2015/11-debuggable-javascript/slides.pdf
</a>
<br>
<a href="http://pmuellr.github.io/slides/">
         http://pmuellr.github.io/slides/
</a>
(all of Patrick's slides)
</div></div></div>

<style>
.nodevember-logo {
  padding:           0.2em;
  background-color: #00936b;
}
</style>

//!embed: toolbar.md

//!embed: layout.md
================================================================================

class: center, middle

# code reading

//!embed: layout.md code reading
================================================================================

class: left, middle

> I'm doing 90% maintenance and 10% development, is this normal?

[Stack Overflow ](http://programmers.stackexchange.com/questions/152464/im-doing-90-maintenance-and-10-development-is-this-normal)

> ... more than 50% of the global software population is engaged in modifying
  existing applications rather than writing new applications." -

[Capers Jones](http://www.compaid.com/caiinternet/ezine/capersjones-maintenance.pdf)

================================================================================

class: left, middle

> In 1949 as soon as we started programming, we found to our surprise that it
wasn’t as easy to get programs right as we had thought. Debugging had to be
discovered. I can remember the exact instant when I realised that a large part
of my life from then on was going to be spent in finding mistakes in my own
programs.

[Maurice Wilkes](http://www.telegraph.co.uk/news/obituaries/technology-obituaries/8171435/Professor-Sir-Maurice-Wilkes.html)

================================================================================

class: center, middle

# you will write a little code

# you will read a lot of code

--------------------------------------------------------------------------------

## pyramid of doom

```js
//!snippet: pyramid-of-doom.js
```

Die! Die! Die!

--------------------------------------------------------------------------------

## pyramid of doom fixed - 1

```js
//!snippet: pyramid-of-doom-fixed-1.js
```

--------------------------------------------------------------------------------

## pyramid of doom fixed - 2

```js
//!snippet: pyramid-of-doom-fixed-2.js
```

--------------------------------------------------------------------------------

## pyramid of doom - see also

* [async - npm](https://www.npmjs.com/package/async) - Caolan McMahon

* [Promises](http://exploringjs.com/es6/ch_promises.html) - Axel Rauschmayer

--------------------------------------------------------------------------------

## linting - [npm eslint](https://npmjs.org/package/eslint)


--------------------------------------------------------------------------------

## code style conformance - [npm jscs](https://npmjs.org/package/jscs)


--------------------------------------------------------------------------------

<img src="images/HFaTfMRP.jpg" style="float:right; margin-left:1em;">

## Human Factors and Typography for More Readable Programs

* 1990
* Ronald M. Baecker, Aaron Marcus

[ISBN 0201107457](http://www.amazon.com/Human-Factors-Typography-Readable-Programs/dp/0201107457)

--------------------------------------------------------------------------------

<img src="images/HFaTfMRP-example.gif">

//!embed: layout.md
================================================================================

class: center, middle

# logging

//!embed: layout.md logging
================================================================================

class: left, middle

> The most effective debugging tool is still careful thought,
  coupled with judiciously placed print statements."

[Brian W. Kernighan](http://www.mtholyoke.edu/~mcrowley/beginners.pdf)

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

## npm `debug`

```js
//!snippet: debug.js
```

<pre><code>$ DEBUG=* node debug.js
<span style="color:#0A0">thing-B</span> churning <span style="color:#0A0">+0ms</span>
<span style="color:#00A">thing-A</span> thrashing <span style="color:#00A">+0ms</span>
<span style="color:#0A0">thing-B</span> churning <span style="color:#0A0">+339ms</span>
<span style="color:#00A">thing-A</span> thrashing <span style="color:#00A">+501ms</span>
...
</code></pre>

--------------------------------------------------------------------------------

## npm `winston`

```js
//!snippet: winston.js
```

--------------------------------------------------------------------------------

## npm `bunyan`

```js
//!snippet: bunyan.js
```

--------------------------------------------------------------------------------

## npm `bole`

```js
//!snippet: bole.js
```

//!embed: layout.md
================================================================================

class: center, middle

# error handling

//!embed: layout.md error handling
--------------------------------------------------------------------------------

## builtin `process` events

```js
//!snippet: process-events.js
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

### `Error.prepareStackTrace = ...`

```js
function v8PrepareStackTrace(error, callSites) {
  for (let callSite of callSites) {
    const funcName = callSite.getFunctionName()
    const file     = callSite.getFileName()
    const line     = callSite.getLineNumber()
    ...
  }
  return outputString
}
```

reference: [javascript_stack_trace_api.md](https://chromium.googlesource.com/v8/v8/+/master/docs/javascript_stack_trace_api.md)

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

//!embed: layout.md
================================================================================

class: center, middle

# early warning systems

//!embed: layout.md early warning systems
--------------------------------------------------------------------------------

class: center, middle

## If debugging is the process of removing bugs, then programming must be the process of putting them in.

### -- Edsger W. Dijkstra

--------------------------------------------------------------------------------

## testing - [npm mocha](http://npmjs.org/package/mocha)

```js
//!snippet: mocha.js
```

--------------------------------------------------------------------------------

## testing - [npm tape](http://npmjs.org/package/tape)

```js
//!snippet: tape.js
```


--------------------------------------------------------------------------------

## code coverage - [coveralls](https://coveralls.io)

--------------------------------------------------------------------------------

## dependency updating - [David](https://david-dm.org)

--------------------------------------------------------------------------------

## linting

<pre><code>$ <span style="color:#00A;">jshint snippets/*.js</span>
snippets/alert.js: line 1, col 17, Missing semicolon.

snippets/console_log.js: line 1, col 19, Missing semicolon.
snippets/console_log.js: line 4, col 26, Missing semicolon.
snippets/console_log.js: line 7, col 25, Missing semicolon.
snippets/console_log.js: line 10, col 35, Missing semicolon.
snippets/console_log.js: line 13, col 21, Missing semicolon.

snippets/console_time.js: line 1, col 20, Missing semicolon.
snippets/console_time.js: line 2, col 10, Missing semicolon.
snippets/console_time.js: line 3, col 23, Missing semicolon.
snippets/console_time.js: line 8, col 21, Missing semicolon.

... repeats ad nauseum ...
</code></pre>

--------------------------------------------------------------------------------

## linting

* jshint - <http://jshint.com/>

* jslint - <http://jslint.com/>


//!embed: layout.md
================================================================================

class: center, middle

# actual debugging

//!embed: layout.md actual debugging
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

<table>
<tr>
<td valign="top" width="50%">

<pre><code style="font-size:60%">&gt; node debug debugger.js
&lt; debugger listening on port 5858
connecting... ok
...
debug&gt; <span style="color:#00A;">watch("x")</span>
debug&gt; <span style="color:#00A;">cont</span>
break in debugger.js:2
Watchers:
  0: x = undefined

  1 function a() {
  2 	<span style="color:#0A0">debugger</span>
  3 	var x = 1
  4 	var y = 2
debug&gt; <span style="color:#00A;">next</span>
</code></pre>

<td valign="top" width="50%">

<pre><code style="font-size:60%">...
debug&gt; <span style="color:#00A;">next</span>
break in debugger.js:4
Watchers:
  0: x = 1

  2 	debugger
  3 	var x = 1
  4 	<span style="color:#0A0">var</span> y = 2
  5 	console.log(x + " + " ...
  6 }
debug&gt; <span style="color:#00A;">cont</span>
&lt; 1 + 2 = 3
program terminated
debug&gt;
</code></pre>

</table>

--------------------------------------------------------------------------------

## npm `hooker`

```js
//!snippet: hooker.js
```

--------------------------------------------------------------------------------

## npm `hooker`

prints:
```
-> Math.max: [5,6,7]
<- Math.max: 7
-> Math.sqrt: [2]
<- Math.sqrt: 1.4142135623730951
```

also provides

* filtering arguments
* overriding results
* https://github.com/cowboy/javascript-hooker

--------------------------------------------------------------------------------

## heap snapshots

--------------------------------------------------------------------------------

## cpu profiles

//!embed: layout.md
================================================================================

class: center, middle

# `fin`