var SlidesRatio   = localStorage.getItem("remark-ratio")   || "4:3"
var SlidesClicker = "off"

//----------------------------------------------------------------------
var slideshow = remark.create({
  // Set the slideshow display ratio
  // Default: '4:3'
  // Alternatives: '16:9', ...
  ratio: SlidesRatio,

  // Navigation options
  navigation: {
    // Enable or disable navigating using scroll
    // Default: true
    // Alternatives: false
    scroll: false,

    // Enable or disable navigation using touch
    // Default: true
    // Alternatives: false
    touch: true
  }
})

//----------------------------------------------------------------------
function toggleDisplayRatio() {
  SlidesRatio = (SlidesRatio == "4:3") ? "16:9" : "4:3"

  localStorage.setItem("remark-ratio", SlidesRatio)

  window.location.reload()
}

//----------------------------------------------------------------------
function initDisplayRatio() {
  var button1 = $("#button-display-ratio-4")
  var button2 = $("#button-display-ratio-16")

  button1.attr("checked", SlidesRatio == "4:3")
  button2.attr("checked", SlidesRatio == "16:9")

  button1.change(function () { toggleDisplayRatio() })
  button2.change(function () { toggleDisplayRatio() })
}

var bodyContainers = [
  "remark-container",
  "remark-slides-area",
  "remark-slide-container",
  "remark-slide-scaler",
  "remark-slide",
  "remark-slide-content"
]

//----------------------------------------------------------------------
function isClickableEvent(e) {
  if (SlidesClicker != "on") return false

  var inBodyContainer = false
  var target = $(e.target)

  for (var i=0; i<bodyContainers.length; i++) {
    if (target.hasClass(bodyContainers[i])) {
      return true
    }
  }

  return false
}

//----------------------------------------------------------------------
function onMouseDown(e) {
  if (!isClickableEvent(e)) return

  e.preventDefault()

  if (e.button === 0) slideshow.gotoNextSlide()
  if (e.button === 2) slideshow.gotoPreviousSlide()
}

//----------------------------------------------------------------------
function onContextMenu(e) {
  if (!isClickableEvent(e)) return

  e.preventDefault()
}

//----------------------------------------------------------------------
function toggleClickerMode() {
  var button = $("#button-clicker")

  SlidesClicker = (SlidesClicker == "on") ? "off" : "on"

  button.attr("checked", SlidesClicker == "on")
}

//----------------------------------------------------------------------
function initClickerMode() {
  var button = $("#button-clicker")

  button.click(toggleClickerMode)

  window.addEventListener("mousedown",   onMouseDown,   false)
  window.addEventListener("contextmenu", onContextMenu, false)
}

//----------------------------------------------------------------------
function installGA() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49999565-2', 'pmuellr.github.io');
  ga('send', 'pageview');
}

//----------------------------------------------------------------------
setTimeout(initDisplayRatio, 500)
setTimeout(initClickerMode,  500)

setTimeout(installGA, 1000)