process.on("exit", function(code) {
	console.log("exiting with code: " + code)
})

process.on("uncaughtException", function(err) {
	console.log("uncaught exception: " + err)
})

function a() { throw new Error("die die die") }

a()

// prints:
//
// uncaught exception: Error: die die die
// exiting with code: 0
