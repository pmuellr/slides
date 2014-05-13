var repl = require("repl")

function a(i) {
	var context = repl.start("repl> ").context
	context.pi  = 3.14
	context.arg = i
}

a(3)

// repl> pi
// 3.14
// repl> arg
// 3
// repl>