var source = new EventSource("http://localhost:3000")

source.addEventListener("message", function(event) {
  console.log("the server sent: '" + event.data + "'")
})
