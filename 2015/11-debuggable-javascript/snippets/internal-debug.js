var vm = require('vm')

var Debug = vm.runInDebugContext('Debug')

console.log(Debug.DebugEvent.Break)

console.log(Debug.debuggerFlags())

// console.log(Debug)
Debug.scripts().forEach(function(script) { console.log(script.name); })
