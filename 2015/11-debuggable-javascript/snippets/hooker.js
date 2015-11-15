//!hide
const hooker = require("hooker")

//!show
function preCall(name) {
	const args = [].slice.call(arguments,1)
	log("->", name, args)
}
function postCall(result, name) {
	log("<-", name, result)
}
hooker.hook(Math, Object.getOwnPropertyNames(Math), {
  passName: true,
  pre:  preCall,
  post: postCall
})

Math.max(5, 6, 7)
Math.sqrt(2)
//!hide
function log(prefix, name, value) {
  console.log("%s Math.%s: %j", prefix, name, value)
}
//!show
