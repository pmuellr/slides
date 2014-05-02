var savedRatio = localStorage.getItem("remark-ratio") || "4:3"

var slideshow = remark.create({
// Set the slideshow display ratio
// Default: '4:3'
// Alternatives: '16:9', ...
ratio: savedRatio,

// Navigation options
navigation: {
  // Enable or disable navigating using scroll
  // Default: true
  // Alternatives: false
  scroll: true,

  // Enable or disable navigation using touch
  // Default: true
  // Alternatives: false
  touch: true
}})

//----------------------------------------------------------------------
function toggleRatio() {
  if (savedRatio == "4:3") {
    savedRatio = "16:9"
  }
  else {
    savedRatio = "4:3"
  }

  localStorage.setItem("remark-ratio", savedRatio)
  location.reload()
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
setTimeout(installGA, 1000)