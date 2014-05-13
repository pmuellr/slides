var fs      = require("fs")
var tracing = require("tracing")

function getHandler(name) { return function(context){
	fs.writeSync(1, name + context + "\n")
}}

var handler = {
	before: getHandler("before: "),
	after:  getHandler("after:  ")
}

var tracer = tracing.createAsyncListener(handler)
tracing.addAsyncListener(tracer)

setInterval(function(){}, 1000)