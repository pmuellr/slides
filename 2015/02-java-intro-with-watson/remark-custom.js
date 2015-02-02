//----------------------------------------------------------------------
// clicker mode thanks to Raymond Camden:
//    http://www.raymondcamden.com/index.cfm/2012/10/20/Adding-mouse-click-navigation-to-revealjs
//----------------------------------------------------------------------

var SlidesRatio   = localStorage.getItem("remark-ratio")   || "4:3"
var SlidesClicker = localStorage.getItem("remark-clicker") || "off"
var SlidesCPanel  = localStorage.getItem("remark-cpanel") || "off"

var SlideShow

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

  if (e.button === 0) SlideShow.gotoNextSlide()
  if (e.button === 2) SlideShow.gotoPreviousSlide()
}

//----------------------------------------------------------------------
function onContextMenu(e) {
  if (!isClickableEvent(e)) return

  e.preventDefault()
}

//----------------------------------------------------------------------
function initClickerMode() {
  window.addEventListener("mousedown",   onMouseDown,   false)
  window.addEventListener("contextmenu", onContextMenu, false)
}

//----------------------------------------------------------------------
function togglePanel(sel, override) {
  var elem    = $(sel)
  var current = elem.css("visibility")
  var next    = (current == "visible") ? "hidden" : "visible"

  if (override) next = override
  elem.css("visibility", next)
}

//----------------------------------------------------------------------
function toggleClicker(elem) {
  SlidesClicker = (SlidesClicker == "off") ? "on" : "off"
  localStorage.setItem("remark-clicker", SlidesClicker)
  setClicker(elem)
}

//----------------------------------------------------------------------
function toggleHD(elem) {
  SlidesRatio   = (SlidesRatio == "16:9" ? "4:3" : "16:9")
  localStorage.setItem("remark-ratio", SlidesRatio)

  window.location.reload()
}

//----------------------------------------------------------------------
function setClicker(elem) {
  elem.removeClass("on")
  elem.removeClass("off")

  elem.addClass(SlidesClicker)
}

//----------------------------------------------------------------------
function setHD(elem) {
  elem.removeClass("on")
  elem.removeClass("off")

  var value = (SlidesRatio == "16:9") ? "on" : "off"

  elem.addClass(value)
}

//----------------------------------------------------------------------
function initToolBar() {
  // $(".navHelp").
  $(".button-1st").click( function() { SlideShow.gotoFirstSlide()    })
  $(".button-prev").click(function() { SlideShow.gotoPreviousSlide() })
  $(".button-next").click(function() { SlideShow.gotoNextSlide()     })

  var buttonC = $(".button-clicker")
  var buttonH = $(".button-hd")

  buttonC.click( function() { toggleClicker( buttonC)})
  buttonH.click( function() { toggleHD(      buttonH)})

  setClicker( buttonC )
  setHD(      buttonH )

  togglePanel(".controlPanel", SlidesCPanel == "on" ? "visible" : "hidden")

  $("body").keypress(function(e) {
    var key  = e.keyCode || e.charCode || e.which
    var char = String.fromCharCode(key)

    if ("n" == char) return togglePanel(".navHelp")
    if ("s" == char) {
      SlidesCPanel = (SlidesCPanel == "on") ? "off" : "on"
      localStorage.setItem("remark-cpanel", SlidesCPanel)

      return togglePanel(".controlPanel")
    }
  })
}

//----------------------------------------------------------------------
function installGA() {
  if (location.protocol == "file:") return
    
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49999565-2', 'pmuellr.github.io');
  ga('send', 'pageview');
}

//----------------------------------------------------------------------
function init() {

  replaceSnippets()

  SlideShow = remark.create({
    ratio: SlidesRatio,
    navigation: { scroll: false, touch:  true }
  })

  initClickerMode()
  initToolBar()

  setTimeout(installGA, 1000)
}

//----------------------------------------------------------------------
$(init)
