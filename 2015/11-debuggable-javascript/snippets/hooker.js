const hooker = require("hooker")

function log(prefix, name, value) {
	console.log("%s Math.%s: %j", prefix, name, value)
}

hooker.hook(Math, Object.getOwnPropertyNames(Math), {
	passName: true,
	pre: (name) => log("->", name, [].slice.call(arguments,1)),
	post: function (result, name) -> log("<-", name, result)
	}
})

Math.max(5, 6, 7)
Math.sqrt(2)
