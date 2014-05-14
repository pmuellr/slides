//----------------------------------------------------------------------
// clicker mode thanks to Raymond Camden:
//    http://www.raymondcamden.com/index.cfm/2012/10/20/Adding-mouse-click-navigation-to-revealjs
//----------------------------------------------------------------------

var SlidesRatio   = localStorage.getItem("remark-ratio")   || "4:3"
var SlidesClicker = localStorage.getItem("remark-clicker") || "off"

var SlidesRatioDisplay = null
var SlidesRatioClicker = null

//----------------------------------------------------------------------
replaceSnippets()

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
function replaceSnippets() {
  var $slides = $($("textarea#source")[0])
  var source  = $slides.html()

  var iLines = source.split("\n")
  var oLines = []

  for (var i=0; i<iLines.length; i++) {
    var line  = iLines[i]
    var match = line.match(/^\/\/!snippet:\s+(.*)$/)

    if (!match) {
      oLines.push(line)
      continue
    }

    var snippetName = match[1]
    var replacement = Snippets[snippetName]

    if (!replacement) replacement = "// unable to find snippet: " + snippetName

    oLines.push(replacement)
  }

  source = oLines.join("\n")

  $slides.html(source)
}

//----------------------------------------------------------------------
function setDisplayRatio(size) {
  if (-1 == ["4:3", "16:9"].indexOf(size)) size = "4:3"
    if (SlidesRatio == size) return

  SlidesRatio = size

  localStorage.setItem("remark-ratio", SlidesRatio)

  window.location.reload()
}

//----------------------------------------------------------------------
function initDisplayRatio() {
  SlidesRatioDisplay.text(SlidesRatio)

  $("#button-display-ratio-4" ).click(function() { setDisplayRatio("4:3")  })
  $("#button-display-ratio-16").click(function() { setDisplayRatio("16:9") })
}

//----------------------------------------------------------------------
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
function setClickerMode(value) {
  if (SlidesClicker == value) return

  SlidesClicker = value

  SlidesRatioClicker.text(SlidesClicker)

  localStorage.setItem("remark-clicker", SlidesClicker)
}

//----------------------------------------------------------------------
function initClickerMode() {
  SlidesRatioClicker.text(SlidesClicker)

  $("#button-clicker-on" ).click(function() { setClickerMode("on")  })
  $("#button-clicker-off").click(function() { setClickerMode("off") })

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
function init() {
  SlidesRatioDisplay = $("#display-ratio-value")
  SlidesRatioClicker = $("#clicker-value")

  initDisplayRatio()
  initClickerMode()

  setTimeout(installGA, 1000)
}

//----------------------------------------------------------------------
$(init)
