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

## linting and code style - [standard](http://npmjs.org/package/standard)

```text
$ node_modules/.bin/standard

standard: Use JavaScript Standard Style
      (https://github.com/feross/standard)
  path/to/bole.js:1:22: Strings must use singlequote.
  path/to/bole.js:3:18: Strings must use singlequote.
  path/to/bole.js:4:22: Strings must use singlequote.
  path/to/bole.js:6:10: Strings must use singlequote.
  ...

(it never ends)
```

--------------------------------------------------------------------------------

## general thoughts

* keep functions shorter than a "page"; v8 will "inline" short functions!

* add vertical whitespace to separate meaty bits (eg, functions)

* lots of great ideas in [Code Complete](http://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670)

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

## npm [`node-inspector`](https://www.npmjs.com/package/node-inspector)

* Chrome Dev Tools user interface

* but for debugging node

--------------------------------------------------------------------------------

## IDEs with debugging support

* [IntelliJ IDEA](https://www.jetbrains.com/editors/nodejs.jsp?ide=idea)

* [Visual Studio Code](https://code.visualstudio.com/Docs/editor/debugging)

--------------------------------------------------------------------------------

## npm [`hooker`](https://www.npmjs.com/package/hooker)

```js
//!snippet: hooker.js
```

--------------------------------------------------------------------------------

## npm [`hooker`](https://github.com/cowboy/javascript-hooker)

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

--------------------------------------------------------------------------------

## cpu profiles / heap snapshots

* V8 provides a built-in sampling cpu profiler
  * see time spent in expensive functions
  * shows stack for those functions

* V8 provides a built-in heap snapshot facility
  * dumps a representation of **ALL** JS objects

--------------------------------------------------------------------------------

## cpu profiles / heap snapshots

* npm [`v8-profiler`](https://www.npmjs.com/package/v8-profiler)

* [StrongLoop](https://docs.strongloop.com/display/SLC/Profiling)

* [N|Solid](https://nodesource.com/products/nsolid)

These tools generate files that can be loaded in Chrome Dev Tools.
StrongLoop and N|Solid also provide their own viewers.

--------------------------------------------------------------------------------

## cpu profiles - pro tips

* **NAME YOUR FUNCTIONS**

* use `node --no-use-inlining` if your functions are getting inlined

--------------------------------------------------------------------------------

## heap snapshots - pro tips

* easiest available data is organized by class name - so use classes

* inject "tags" into objects you want to track, or via WeakSet


//!embed: layout.md
================================================================================

class: center, middle

# how can you help?

//!embed: layout.md how can you help?
--------------------------------------------------------------------------------

## write debugging tools!

* lots of low hanging fruit
* lots of data from existing v8 debugging tools
* better typesetting of programs

--------------------------------------------------------------------------------

## cpu profiles

* v8 format subject to change

--------------------------------------------------------------------------------

## heap snapshots

* start with `npm [snapshot-utils](https://www.npmjs.com/package/snapshot-utils)`

* example: [displaying all "variables" in a shapshot](http://bmeck.github.io/snapshot-utils/doc/manual/tutorial.html#get-variables-in-a-heapsnapshot)

* v8 format subject to change

--------------------------------------------------------------------------------

## access debugger from your app

* tantalizing snippet from the [`vm` module](https://nodejs.org/api/vm.html#vm_vm_runindebugcontext_code)

```js
//!snippet: internal-debug.js
```

* notes on functions available, beyond the v8 source: [node-debug-context](https://github.com/pmuellr/node-debug-context)


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

# `fin`
