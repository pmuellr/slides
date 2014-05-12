console.time("foo")
doStuff()
console.timeEnd("foo")

// prints: foo: 1121ms
//!hide

function doStuff() {
	var LOOPS = 1000

	for (var i=0; i<LOOPS; i++) {
		for (var j=0; j<LOOPS; j++) {
			for (var k=0; k<LOOPS; k++) {
				var x = i * j * k
			}
		}
	}
}
