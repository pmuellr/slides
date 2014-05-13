var repl = require("repl")

function a(i) { b(i*i) }
function b(i) { c(i*i) }
function c(i) {
	var context = repl.start("repl> ").context
	context.pi  = 3.14
	context.arg = i
}

a(3)

// repl> pi
// 3.14
// repl> arg
// 81
