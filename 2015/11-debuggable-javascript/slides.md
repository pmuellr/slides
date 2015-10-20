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
<a href="http://pmuellr.github.io/slides/2015/11-debuggable-javascript.pdf">
         http://pmuellr.github.io/slides/2015/11-debuggable-javascript.pdf
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

<div style="float:right">
  <img class="nodevember-logo" src="images/nodevember-logo.png">
</div>

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
<tt>making your JavaScript debuggable</tt>
</span></span></span>
<!--
  <img height=24 src="../../glyphicons_free/glyphicons/png/glyphicons_027_search.png">
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
    <img class="button-clicker" height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_027_search.png"   title="use clicker">
    <img class="button-hd"      height=16 src="../../glyphicons_free/glyphicons/png/glyphicons_391_video_hd.png" title="toggle HD">
  </div>
</div>

--------------------------------------------------------------------------------

### what is debugging anyway

"I'm doing 90% maintenance and 10% development, is this normal?" - [SO](http://programmers.stackexchange.com/questions/152464/im-doing-90-maintenance-and-10-development-is-this-normal)

"... more than 50% of the global software population is engaged in modifying
existing applications rather than writing new applications." -
[Capers Jones](http://www.compaid.com/caiinternet/ezine/capersjones-maintenance.pdf)

--------------------------------------------------------------------------------

### what is debugging anyway

"In 1949 as soon as we started programming, we found to our surprise that it
wasn’t as easy to get programs right as we had thought. Debugging had to be
discovered. I can remember the exact instant when I realised that a large part
of my life from then on was going to be spent in finding mistakes in my own
programs." —
[Maurice Wilkes](http://www.telegraph.co.uk/news/obituaries/technology-obituaries/8171435/Professor-Sir-Maurice-Wilkes.html)

================================================================================

class: center, middle


> "The most effective debugging tool is still careful thought,
> coupled with judiciously placed print statements."

Brian W. Kernighan,
[Unix for Beginners](http://www.mtholyoke.edu/~mcrowley/beginners.pdf)



--------------------------------------------------------------------------------

### yarp

--------------------------------------------------------------------------------

### yarp

--------------------------------------------------------------------------------

### yarp


--------------------------------------------------------------------------------

### sample

```js
//!snippet: sample.js
```

--------------------------------------------------------------------------------

### what is debugging anyway


================================================================================

class: center, middle

# `fin`
