# node.js on Bluemix

### why and how use node.js on Bluemix

&nbsp;

[Patrick_Mueller@us.ibm.com](mailto:Patrick_Mueller@us.ibm.com)
-
[`@pmuellr`](https://twitter.com/pmuellr)

[`muellerware.org`](http://muellerware.org)

.smaller[.smaller[
<http://pmuellr.github.io/slides/2014/09-node-js-on-bluemix>
<br>
<http://pmuellr.github.io/slides/> (all slides)
]]

<div class="toolBar">
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
  <img height=24 src="../../images/ibm-8-bar-trans.png" id="ibm-8-bar-icon">
  &nbsp;
  <img height=24 src="../../images/js.png">
  &nbsp;
</div>

{{content}}

<div class="toolBar">
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

## Patrick Mueller

developer advocate at IBM for
[node.js](http://nodejs.org)
and
[BlueMix](https://bluemix.net)

Raleigh, NC

more of my slides: <http://pmuellr.github.io/slides>


--------------------------------------------------------------------------------

## who is using node.js?

<img src="../../images/js.png" width=256 style="float: right">

* [PayPal](https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/)
* [Walmart](http://venturebeat.com/2012/01/24/why-walmart-is-using-node-js/)
* [LinkedIn](http://venturebeat.com/2011/08/16/linkedin-node/)
* [Yahoo!](http://reidburke.com/deck/2014/noderoad/)
* [IBM](http://www.infoq.com/news/2014/05/ibm-node-red-qconlondon)

node.js uses [Google](https://code.google.com/p/v8/)'s V8 JavaScript engine.

--------------------------------------------------------------------------------

## why are people using node.js (vs Java)?

from [PayPal](https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/);
development:

* Built almost twice as fast with fewer people

* Written in 33% fewer lines of code

* Constructed with 40% fewer files

--------------------------------------------------------------------------------

## why are people using node.js (vs Java)?

from [PayPal](https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/);
performance:

* Double the requests per second.
  (node single core vs Java five cores)

* 35% decrease in the average response time for the same page.
  (pages served 200ms faster)

--------------------------------------------------------------------------------

## what is IBM doing in the node.js space?

* contributing open source port of v8 and node.js for Power and Mainframe
* first-class support on Bluemix
* low-level diagnostics via the
  [monitoring and analytics add-on for Bluemix](https://www.ng.bluemix.net/docs/#services/monana/index.html)
* libraries for IBM Bluemix services
  * Mobile Backend as a Service, Cloudant, MQLight, etc

================================================================================

class: center, middle

# `fin`
