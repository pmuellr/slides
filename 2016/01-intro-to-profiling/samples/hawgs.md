<!-- ======================================================================= -->

**cpu-hawg**

```js
setInterval(processThings, 1000 / 1)

function processThings () {
  a(); z(); z(); z()
}

function a () { doStuff(1); b(); doStuff(1) }
function b () { doStuff(2); c(); doStuff(2) }
function c () { doStuff(3); d(); doStuff(3) }
function d () { doStuff(4); e(); doStuff(4) }
function e () { doStuff(5); f(); doStuff(5) }
function f () { doStuff(6) }

function z () { doStuff(7); y(); doStuff(7) }
function y () { doStuff(8); x(); doStuff(8) }
function x () { doStuff(9) }
```

<div style="page-break-after:always;"></div>

<!-- ======================================================================= -->

**mem-hawg A1 - leaking literal JavaScript objects**

```js
function aFunction () {
  const point = { x: 0, y: 0 }
  ...
}
```

<div style="page-break-after:always;"></div>

<!-- ======================================================================= -->

**mem-hawg A2 - tagging JavaScript objects**

```js
function aFunction () {
  const point = { x: 0, y: 0 }
  point.__tag = new TagLiteralPoint()
  ...
}

class TagLiteralPoint {}
```

<div style="page-break-after:always;"></div>

<!-- ======================================================================= -->

**mem-hawg B1 - leaking class instances, but why?**

```js
class Point {
  constructor () {
    this.x = Math.random() * 100
    this.y = Math.random() * 100
  }
}

function aFunction () {
  const point = new Point()

  if (point.x > 25) {
    processPointA(point)
  } else {
    processPointB(point)
  }
}

function processPointA (point) {
  ...
}

function processPointB (point) {
  ...
}
```

<div style="page-break-after:always;"></div>

<!-- ======================================================================= -->

**mem-hawg B2 - tagging code paths**

```js
class Point {
  constructor () {
    this.x = Math.random() * 100
    this.y = Math.random() * 100
  }
}

function aFunction () {
  const point = new Point()

  if (point.x > 25) {
    processPointA(point)
  } else {
    processPointB(point)
  }
}

function processPointA (point) {
  point.__tagA = new TagProcessedPointA()
  ...
}

function processPointB (point) {
  point.__tagB = new TagProcessedPointB()
  ...
}

class TagProcessedPointA {}
class TagProcessedPointB {}
```
