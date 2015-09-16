# es6 goodies in node 4

<div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>

<img src="../../images/nodesource.png" width=80 style="float:right">
Patrick Mueller
[`@pmuellr`](https://twitter.com/pmuellr),
[`muellerware.org`](http://muellerware.org)<br>
senior node engineer at [NodeSource](https://nodesource.com)<br>

<div class="smaller"><div class="smaller"><div class="smaller">
<a href="http://pmuellr.github.io/slides/2015/09-es6-goodies">
         http://pmuellr.github.io/slides/2015/09-es6-goodies
</a>
<br>
<a href="http://pmuellr.github.io/slides/">
         http://pmuellr.github.io/slides/
</a>
(all of Patrick's slides)
</div></div></div>


<div class="toolBar no-print">
  <div class="navHelp" title="use the cursor keys to navigate, 'n' to toggle nav buttons, 's' to toggle control panel">
    <img class="button-1st"  height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_171_fast_backward.png">
    <img class="button-prev" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_172_rewind.png">
    <img class="button-next" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_176_forward.png">
  </div>
  <div>&nbsp;&nbsp;</div>
  <div class="controlPanel" title="'s' to toggle control panel">
    <img class="button-clicker" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png"   title="use clicker">
    <img class="button-hd"      height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_391_video_hd.png" title="toggle HD">
  </div>
</div>

---

layout: true

<div class="page-icon">
<span class="smaller"><span class="smaller"><span class="smaller">
<tt>es6 goodies in node.js 4.0</tt>
</span></span></span>
<!--
  <img height=24 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png">
  &nbsp;
  <img height=24 src="../../images/js.png">
  &nbsp;
-->
</div>

{{content}}

<div class="toolBar no-print">
  <div class="navHelp" title="use the cursor keys to navigate, 'n' to toggle nav buttons, 's' to toggle control panel">
    <img class="button-1st"  height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_171_fast_backward.png">
    <img class="button-prev" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_172_rewind.png">
    <img class="button-next" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_176_forward.png">
  </div>
  <div>&nbsp;&nbsp;</div>
  <div class="controlPanel" title="'s' to toggle control panel">
    <img class="button-clicker" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_046_router.png"   title="use clicker">
    <img class="button-hd"      height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_391_video_hd.png" title="toggle HD">
  </div>
</div>

--------------------------------------------------------------------------------

### node 4.0 announced!

[Have You Heard Of It?][ns-blog-v4]

> Node.js v4.0.0 has just been released. This is a huge milestone for Node under the new Node.js Foundation. All thanks to the development process inherited from the io.js fork.

All the io.js work has now been integrated back into the core node.js stream!

But wait, there's more ...


[ns-blog-v4]: https://nodesource.com/blog/nodejs-v400--node-at-its-best

--------------------------------------------------------------------------------

### new in node 4.0

* **EcmaScript 6 features!**

  * because: [V8 4.5](http://v8project.blogspot.de/2015/07/v8-45-release.html)

  * same level of V8 as shipped in [Chrome 45][chrome-45-blog]

* [moar stuff][node-40-changelog]


[chrome-45-blog]: http://blog.chromium.org/2015/07/chrome-45-beta-new-es2015-features.html
[node-40-changelog]: https://github.com/nodejs/node/blob/master/CHANGELOG.md#2015-09-08-version-400-stable-rvagg

--------------------------------------------------------------------------------

### wat EcmaScript 6 features?

my favorites:

* template strings - \`new kind of strings!\`

* classes - `class X { foo() { log("in foo") } }`

* arrow functions - `cb => cb("shorter functions")`


================================================================================

class: center, middle

# template strings

--------------------------------------------------------------------------------

### template strings - simple

```js
//!snippet: simple-template.js
```

--------------------------------------------------------------------------------

### template strings - tagged use case

```js
//!snippet: string-pusher-old.js
```

--------------------------------------------------------------------------------

### template strings - tagged use case

```js
//!snippet: string-pusher.js
```

--------------------------------------------------------------------------------

### template strings - tagged use case

```js
//!snippet: Line-Poster.js
```

--------------------------------------------------------------------------------

### template strings - tagged use case

```js
p`Hello`
```

becomes

```js
p( ["Hello"] , [ ] )
```

<hr>

```js
p`line number: ${1+1}`
```

becomes

```js
p(["line number: ",""],[2])
```


--------------------------------------------------------------------------------

### template strings - tagged use case

```js
//!snippet: interpolate.js
```

--------------------------------------------------------------------------------

### template strings - moar info

* <http://www.2ality.com/2015/01/es6-strings.html>
* <http://www.2ality.com/2015/01/template-strings-html.html>

================================================================================

class: center, middle

# classes

--------------------------------------------------------------------------------

### classes - simple old school

```js
//!snippet: simple-class-old.js
```

--------------------------------------------------------------------------------

### classes - simple new school

```js
//!snippet: simple-class.js
```


--------------------------------------------------------------------------------

### classes - subclasses old school

<img src="images/messy-office-03.jpg" width="75%">


--------------------------------------------------------------------------------

### classes - subclasses new school

```js
//!snippet: subclass.js
```

--------------------------------------------------------------------------------

### classes - super calls

```js
//!snippet: super-calls.js
```

--------------------------------------------------------------------------------

### class performance note

<img src="images/trev-norris.jpg" width=120 style="float:right">

from [Trevor Norris](https://twitter.com/trevnorris),
one of the resident performance gurus at NodeSource:

> It's worth mentioning that `super()` isn't optimized yet. So should not be used in hot code.

--------------------------------------------------------------------------------

### classes - moar info

* <http://www.2ality.com/2015/02/es6-classes-final.html>


================================================================================

class: center, middle

# arrow functions


--------------------------------------------------------------------------------

### arrow function

```js
//!snippet: arrow-function.js
```

--------------------------------------------------------------------------------

### arrow function w/this

```js
//!snippet: arrow-in-class.js
```

--------------------------------------------------------------------------------

### arrow functions - moar info

<ul>
  <li style="font-size:75%">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    </a>
</ul>


================================================================================

class: center, middle

# `fin`
