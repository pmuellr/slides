Snippets = {
    "bole.js": "const bole = require(\"bole\")\n\nconst log = bole(\"myapp\")\nbole.output({ level: \"info\", stream: process.stdout })\n\nlog.info(\"hi\")\n\n// prints\n// {\"time\":\"2015-10-27T03:56:45.762Z\",\n//  \"hostname\":\"my-hostname\", \"pid\":53014,\n//  \"level\":\"info\", \"name\":\"myapp\", \"message\":\"hi\"}\n\n// du -h bole - 144K\n",
    "bunyan.js": "const bunyan = require(\"bunyan\")\n\nconst log = bunyan.createLogger({name: \"myapp\"})\nlog.level(\"info\")\n\nlog.info(\"hi\")\n\n// prints\n// {\"name\":\"myapp\", \"hostname\":\"my-hostname\",\n//  \"pid\":49675, \"level\":30, \"msg\":\"hi\",\n//  \"time\":\"2015-10-27T03:49:14.759Z\", \"v\":0}\n\n// du -h bunyan - 2.5M\n",
    "console_log.js": "console.log(\"foo\")\n// prints: foo\n\nconsole.log(\"foo\", \"bar\")\n// prints: foo bar\n\nconsole.log({x:1, y:2})\n// prints: { x: 1, y: 2 }\n\nconsole.log(\"a-%s-b %j\", 1, {x:1})\n// prints: a-1-b {\"x\":1}\n\nconsole.log(process)\n// prints: { title: 'node', ...many lines... }\n",
    "console_time.js": "console.time(\"foo\")\ndoStuff()\nconsole.timeEnd(\"foo\")\n\nfunction doStuff() {\n\t// takes a long time\n}\n\n// prints: foo: 1121ms",
    "console_trace.js": "function a() { b() }\nfunction b() { c() }\nfunction c() { console.trace(\"foo\") }\n\na()\n\n// Trace: foo\n//     at c (<program>:3:24)\n//     at b (<program>:2:16)\n//     at a (<program>:1:78)\n//     at ...",
    "debug.js": "const debugA = require(\"debug\")(\"thing-A\")\nconst debugB = require(\"debug\")(\"thing-B\")\n\nfunction a() { debugA(\"thrashing\") }\nfunction b() { debugB(\"churning\") }\n\nsetInterval(a, 500); setInterval(b, 333)\n",
    "debugger.js": "function a() {\n\tdebugger\n\tvar x = 1\n\tvar y = 2\n\tconsole.log(x + \" + \" + y + \" = \" + (x+y))\n}\n\nsetTimeout(a, 1000)",
    "hooker.js": "const hooker = require(\"hooker\")\n\nfunction log(prefix, name, value) {\n\tconsole.log(\"%s Math.%s: %j\", prefix, name, value)\n}\n\nhooker.hook(Math, Object.getOwnPropertyNames(Math), {\n\tpassName: true,\n\tpre: function (name) {\n\t\tlog(\"->\", name, [].slice.call(arguments,1))\n\t},\n\tpost: function (result, name) {\n\t\tlog(\"<-\", name, result)\n\t}\n})\n\nMath.max(5, 6, 7)\nMath.sqrt(2)\n",
    "long-stack-traces-after.js": "require(\"long-stack-traces\")\na()\n\nfunction a() { setTimeout(b, 100) }\nfunction b() { setTimeout(c, 100) }\nfunction c() { throw new Error(\"foo\") }\n\n// Uncaught Error: foo\n//     at [object Object].c (/path/to/long-stack-traces.js:7:22)\n//     at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)\n// ----------------------------------------\n//     at Object.setTimeout\n//     at [object Object].b (/path/to/long-stack-traces.js:5:16)\n//     at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)\n// ----------------------------------------\n//     at Object.setTimeout\n//     at a (/path/to/long-stack-traces.js:3:16)\n//     ...",
    "long-stack-traces-before.js": "\na()\n\nfunction a() { setTimeout(b, 100) }\nfunction b() { setTimeout(c, 100) }\nfunction c() { throw new Error(\"foo\") }\n\n// Error: foo\n//     at c [as _onTimeout] (/path/to/snippets/long-stack-traces-before.js:6:22)\n//     at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)",
    "mocha.js": "describe(\"Array\", function(){\n  describe(\"#indexOf()\", function(){\n    it(\"should return -1 on not found\", function(){\n      assert.equal(-1, [1,2,3].indexOf(1));\n    })\n  })\n})\n\n//  0 passing (3ms)\n//  1 failing\n//\n//  1) Array #indexOf() should return -1 on not found:\n//     AssertionError: -1 == 0\n//      at Context.<anonymous> (.../script.js:7:14)\n//      ...\n",
    "process-events.js": "process.on(\"exit\", code =>\n\tconsole.log(\"exiting with code: \" + code))\nprocess.on(\"uncaughtException\", err =>\n\tconsole.log(\"uncaught exception: \" + err.stack))\n\nfunction a() { throw new Error(\"die die die\") }\n\na()\n\n// prints:\n//\n// uncaught exception: Error: die die die\n//    at a (.../script.js:9:22)\n//    at Object.<anonymous> (.../script.js:11:1)\n//    ... more stack trace lines\n// exiting with code: 0\n",
    "pyramid-of-doom-fixed-1.js": "fs.readdir(\".\", cbReadDir)\nfunction cbReadDir(err, files) {\n  files.forEach(eachFile)\n}\nfunction eachFile(file) {\n  fs.stat(file, (err, stats) => cbStatFile(err, stats, file))\n}\nfunction cbStatFile(err, stats, file) {\n  if (!stats.isFile()) return\n  fs.readFile(file, \"utf8\", (err, data) => cbReadFile(err, data, file))\n}\nfunction cbReadFile(err, data, file) {\n  console.log(file, data.length)\n}\n",
    "pyramid-of-doom-fixed-2.js": "fs.readdir(\".\", cbReadDir)\nfunction cbReadDir(err, files) {\n  files.forEach(eachFile)\n}\nfunction eachFile(file) {\n  fs.stat(file, cbStatFile)\n  function cbStatFile(err, stats) {\n    if (!stats.isFile()) return\n    fs.readFile(file, \"utf8\", cbReadFile)\n  }\n  function cbReadFile(err, data) {\n    console.log(file, data.length)\n  }\n}\n",
    "pyramid-of-doom.js": "fs.readdir(\".\", function(err, files){\n  files.forEach(function(file) {\n    fs.stat(file, function(err, stats){\n      if (!stats.isFile()) return\n      fs.readFile(file, \"utf8\", function(err, data){\n        console.log(file, data.length)\n      })\n    })\n  })\n})\n",
    "q-longStack-after.js": "var Q = require(\"q\")\nQ.longStackSupport = true\n\nfunction a() { Q.delay(100).done(b) }\nfunction b() { throw new Error(\"foo\") }\n\na()\n\n// Error: foo\n//     at b (.../script.js.js:5:22)\n// From previous event:\n//     at a (.../script.js.js:4:29)\n//     at Object.<anonymous> (.../script.js.js:7:1)\n",
    "q-longStack-before.js": "var Q = require(\"q\")\n\n\nfunction a() { Q.delay(100).done(b) }\nfunction b() { throw new Error(\"foo\") }\n\na()\n\n// Error: foo\n//     at b (.../script.js:5:22)\n//     at _fulfilled (.../node_modules/q/q.js:787:54)\n//     at self.promiseDispatch.done ...\n//     at Promise.promise.promiseDispatch ...\n//     ...\n",
    "repl.js": "var repl = require(\"repl\")\n\nfunction a(i) {\n\tvar context = repl.start(\"repl> \").context\n\tcontext.pi  = 3.14\n\tcontext.arg = i\n}\n\na(3)\n\n// repl> pi\n// 3.14\n// repl> arg\n// 3\n// repl>",
    "sample.js": "function factorial(n) {\n  if (n <= 0) return 0\n  if (n == 1) return 1\n  return n * factorial(n-1)\n}\n\nconsole.log(factorial(20))\n",
    "v8_prepareStackTrace-after.js": "Error.prepareStackTrace = function(err, stackTrace) {\n  ...\n}\n\ntry { a() } catch(err) { console.log(err.stack) }\nfunction a() { b() }\nfunction b() { c() }\nfunction c() { throw new Error(\"foo blatz\") }\n\n// Error: foo blatz\n//    script.js  13 - c()\n//    script.js  12 - b()\n//    script.js  11 - a()",
    "v8_prepareStackTrace-before.js": "\ntry { a() } catch(err) { console.log(err.stack) }\nfunction a() { b() }\nfunction b() { c() }\nfunction c() { throw new Error(\"foo blatz\") }\n\n// Error: foo blatz\n//     at c (.../script.js:5:22)\n//     at b (.../script.js:4:16)\n//     at a (.../script.js:3:16)\n//     at Object.<anonymous> (.../script.js:2:7)\n//     at Module._compile (module.js:456:26)\n//     ...",
    "winston.js": "const winston = require(\"winston\")\n\nconst transports = winston.transports\n\nwinston.remove(transports.Console)\nwinston.add(transports.Console, { level: \"warn\" })\nwinston.add(transports.File, { filename: \"x.log\" })\n\nwinston.info(\"info message\")\nwinston.warn(\"warning message\")\nwinston.error(\"error message\")\n\n// prints:\n// warn: warning message\n// error: error message\n"
}