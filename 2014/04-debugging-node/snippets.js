Snippets = {
    "alert.js": "alert(\"help me\")\n\n// prints:\n//\n// ReferenceError: alert is not defined\n//     at Object.<anonymous> (alert.js:1:63)\n//     at Module._compile (module.js:456:26)\n//     ...\n",
    "console_log.js": "console.log(\"foo\")\n// prints: foo\n\nconsole.log(\"foo\", \"bar\")\n// prints: foo bar\n\nconsole.log(\"a-%s-b\", 1)\n// prints: a-1-b\n\nconsole.log(\"a-%s-b %j\", 1, {x:1})\n// prints: a-1-b {\"x\":1}\n\nconsole.log(process)\n// prints: { title: 'node', ...many lines... }",
    "console_time.js": "console.time(\"foo\")\ndoStuff()\nconsole.timeEnd(\"foo\")\n\nfunction doStuff() {\n\t// takes a long time\n}\n\n// prints: foo: 1121ms",
    "console_trace.js": "function a() { b() }\nfunction b() { c() }\nfunction c() { console.trace(\"foo\") }\n\na()\n\n// Trace: foo\n//     at c (<program>:3:24)\n//     at b (<program>:2:16)\n//     at a (<program>:1:78)\n//     at ...",
    "debug.js": "var debugA = require(\"debug\")(\"thing-A\")\nvar debugB = require(\"debug\")(\"thing-B\")\n\nfunction a() { debugA(\"thrashing\") }\nfunction b() { debugB(\"churning\") }\n\nsetInterval(a, 500)\nsetInterval(b, 333)",
    "debugger.js": "function a() {\n\tdebugger\n\tvar x = 1\n\tvar y = 2\n\tconsole.log(x + \" + \" + y + \" = \" + (x+y))\n}\n\nsetTimeout(a, 1000)",
    "hooker.js": "var hooker = require(\"hooker\")\n\nhooker.hook(Math, Object.getOwnPropertyNames(Math), {\n\tpassName: true,\n\tpre: function(name) {\n\t\tvar args = [].slice.call(arguments,1).join(\", \")\n\t\tconsole.log(\"Math.\" + name + \"(\" + args + \") called\")\n\t},\n\tpost: function(result, name) {\n\t\tconsole.log(\"Math.\" + name + \"() returned: \" + result)\n\t}\n})\n\nMath.max(5, 6, 7)\nMath.sqrt(2)\n",
    "long-stack-traces-after.js": "require(\"long-stack-traces\")\na()\n\nfunction a() { setTimeout(b, 100) }\nfunction b() { setTimeout(c, 100) }\nfunction c() { throw new Error(\"foo\") }\n\n// Uncaught Error: foo\n//     at [object Object].c (/path/to/long-stack-traces.js:7:22)\n//     at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)\n// ----------------------------------------\n//     at Object.setTimeout\n//     at [object Object].b (/path/to/long-stack-traces.js:5:16)\n//     at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)\n// ----------------------------------------\n//     at Object.setTimeout\n//     at a (/path/to/long-stack-traces.js:3:16)\n//     ...",
    "long-stack-traces-before.js": "\na()\n\nfunction a() { setTimeout(b, 100) }\nfunction b() { setTimeout(c, 100) }\nfunction c() { throw new Error(\"foo\") }\n\n// Error: foo\n//     at c [as _onTimeout] (/path/to/snippets/long-stack-traces-before.js:6:22)\n//     at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)",
    "node-12-tracing.js": "var fs      = require(\"fs\")\nvar tracing = require(\"tracing\")\n\nfunction getHandler(name) { return function(context){\n\tfs.writeSync(1, name + context + \"\\n\")\n}}\n\nvar handler = {\n\tbefore: getHandler(\"before: \"),\n\tafter:  getHandler(\"after:  \")\n}\n\nvar tracer = tracing.createAsyncListener(handler)\ntracing.addAsyncListener(tracer)\n\nsetInterval(function(){}, 1000)",
    "process-events.js": "process.on(\"exit\", function(code) {\n\tconsole.log(\"exiting with code: \" + code)\n})\n\nprocess.on(\"uncaughtException\", function(err) {\n\tconsole.log(\"uncaught exception: \" + err)\n})\n\nfunction a() { throw new Error(\"die die die\") }\n\na()\n\n// prints:\n//\n// uncaught exception: Error: die die die\n// exiting with code: 0\n",
    "q-longStack-after.js": "var Q = require(\"q\")\nQ.longStackSupport = true\n\nfunction a() { Q.delay(100).done(b) }\nfunction b() { throw new Error(\"foo\") }\n\na()\n\n// Error: foo\n//     at b (/path/to/snippets/q-longStack-after.js:5:22)\n// From previous event:\n//     at a (/path/to/snippets/q-longStack-after.js:4:29)\n//     at Object.<anonymous> (/path/to/snippets/q-longStack-after.js:7:1)",
    "q-longStack-before.js": "var Q = require(\"q\")\n\n\nfunction a() { Q.delay(100).done(b) }\nfunction b() { throw new Error(\"foo\") }\n\na()\n\n// Error: foo\n//     at b (/path/to/snippets/q-longStack-before.js:5:22)\n//     at _fulfilled (/path/to/snippets/node_modules/q/q.js:787:54)\n//     at self.promiseDispatch.done (/path/to/snippets/node_modules/q/q.js:816:30)\n//     at Promise.promise.promiseDispatch (/path/to/snippets/node_modules/q/q.js:749:13)\n//     at /path/to",
    "repl.js": "var repl = require(\"repl\")\n\nfunction a(i) {\n\tvar context = repl.start(\"repl> \").context\n\tcontext.pi  = 3.14\n\tcontext.arg = i\n}\n\na(3)\n\n// repl> pi\n// 3.14\n// repl> arg\n// 3\n// repl>",
    "testing.js": "#!/usr/bin/env node node_modules/.bin/mocha testing.js\n\nvar assert = require(\"assert\")\n\ndescribe(\"Array\", function(){\n  describe(\"#indexOf()\", function(){\n    it(\"should return -1 when the value is not present\", function(){\n      assert.equal(-1, [1,2,3].indexOf(1));\n    })\n  })\n})\n\n//  0 passing (3ms)\n//  1 failing\n//\n//  1) Array #indexOf() should return -1 when the value is not present:\n//     AssertionError: -1 == 0\n//      at Context.<anonymous> (path/to/testing.js:7:14)\n//      ...",
    "v8_prepareStackTrace-after.js": "Error.prepareStackTrace = function(err, stackTrace) { ... }\ntry { a() } catch(err) { console.log(err.stack) }\nfunction a() { b() }\nfunction b() { c() }\nfunction c() { throw new Error(\"foo blatz\") }\n\n// Error: foo blatz\n//    v8_prepareStackTrace-after.js  13 - c()\n//    v8_prepareStackTrace-after.js  12 - b()\n//    v8_prepareStackTrace-after.js  11 - a()",
    "v8_prepareStackTrace-before.js": "\ntry { a() } catch(err) { console.log(err.stack) }\nfunction a() { b() }\nfunction b() { c() }\nfunction c() { throw new Error(\"foo blatz\") }\n\n// Error: foo blatz\n//     at c (/path/to/snippets/v8_prepareStackTrace-before.js:5:22)\n//     at b (/path/to/snippets/v8_prepareStackTrace-before.js:4:16)\n//     at a (/path/to/snippets/v8_prepareStackTrace-before.js:3:16)\n//     at Object.<anonymous> (/path/to/snippets/v8_prepareStackTrace-before.js:2:7)\n//     at Module._compile (module.js:456:26)\n//     at Object.Module._extensions..js (module.js:474:10)\n//     ...",
    "winston.js": "var winston = require(\"winston\")\n\nwinston.remove(winston.transports.Console)\nwinston.add(winston.transports.Console, { level:\"warn\" })\nwinston.add(winston.transports.File, { filename: \"x.log\" })\n\nwinston.info(\"info message\")\nwinston.warn(\"warning message\")\nwinston.error(\"error message\")\n\n// prints:\n// warn: warning message\n// error: error message"
}