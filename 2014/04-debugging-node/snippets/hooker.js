var hooker = require("hooker")

hooker.hook(Math, Object.getOwnPropertyNames(Math), {
	passName: true,
	pre: function(name) {
		var args = [].slice.call(arguments,1).join(", ")
		console.log("Math." + name + "(" + args + ") called")
	},
	post: function(result, name) {
		console.log("Math." + name + "() returned: " + result)
	}
})

Math.max(5, 6, 7)
Math.sqrt(2)
