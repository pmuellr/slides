
try { a() } catch(err) { console.log(err.stack) }
function a() { b() }
function b() { c() }
function c() { throw new Error("foo blatz") }

// Error: foo blatz
//     at c (/Users/pmuellr/Projects/slides/2014/04-debugging-node/snippets/v8_prepareStackTrace-before.js:5:22)
//     at b (/Users/pmuellr/Projects/slides/2014/04-debugging-node/snippets/v8_prepareStackTrace-before.js:4:16)
//     at a (/Users/pmuellr/Projects/slides/2014/04-debugging-node/snippets/v8_prepareStackTrace-before.js:3:16)
//     at Object.<anonymous> (/Users/pmuellr/Projects/slides/2014/04-debugging-node/snippets/v8_prepareStackTrace-before.js:2:7)
//     at Module._compile (module.js:456:26)
//     at Object.Module._extensions..js (module.js:474:10)
//     ...
//!hide

function alignLeft(string, length) {
  while (string.length < length) {
    string = "" + string + " ";
  }
  return string;
}

function alignRight(string, length) {
  while (string.length < length) {
    string = " " + string;
  }
  return string;
}

function _v8PrepareStackTrace(error, structuredStackTrace) {
  var callSite, file, func, funcName, line, longestFile, longestLine, result, _i, _j, _len, _len1;
  result = [];
  result.push(error);
  longestFile = 0;
  longestLine = 0;
  for (_i = 0, _len = structuredStackTrace.length; _i < _len; _i++) {
    callSite = structuredStackTrace[_i];
    file = callSite.getFileName();
    line = callSite.getLineNumber();
    file = file.replace(/.*\//, '');
    line = "" + line;
    if (file.length > longestFile) {
      longestFile = file.length;
    }
    if (line.length > longestLine) {
      longestLine = line.length;
    }
  }
  for (_j = 0, _len1 = structuredStackTrace.length; _j < _len1; _j++) {
    callSite = structuredStackTrace[_j];
    func = callSite.getFunction();
    file = callSite.getFileName();
    line = callSite.getLineNumber();
    file = file.replace(/.*\//, '');
    line = "" + line;
    file = alignRight(file, longestFile);
    line = alignRight(line, longestLine);
    funcName = func.displayName || func.name || callSite.getFunctionName();
    if (funcName === "Module._compile") {
      result.pop();
      break;
    }
    result.push("   " + file + " " + line + " - " + funcName + "()");
  }
  return result.join("\n");
}
