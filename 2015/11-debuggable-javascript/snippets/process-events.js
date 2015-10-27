process.on("exit", code => console.log("exiting with code: " + code))
process.on("uncaughtException", err =>
	console.log("uncaught exception: " + err.stack
)
function a() { throw new Error("die die die") }

a()

// prints:
//
// uncaught exception: Error: die die die
//    at a (/path/to/process-events.js:9:22)
//    at Object.<anonymous> (/path/to/process-events.js:11:1)
//    ... more stack trace lines
// exiting with code: 0
