//!hide
/*
//!show
Error.prepareStackTrace = function(err, stackTrace) { ... }
//!hide
*/
Error.prepareStackTrace = v8PrepareStackTrace
//!show
try { a() } catch(err) { console.log(err.stack) }
function a() { b() }
function b() { c() }
function c() { throw new Error("foo blatz") }

// Error: foo blatz
//    v8_prepareStackTrace-after.js  13 - c()
//    v8_prepareStackTrace-after.js  12 - b()
//    v8_prepareStackTrace-after.js  11 - a()
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

function v8PrepareStackTrace(error, structuredStackTrace) {
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
    funcName = callSite.getFunctionName();
    if (funcName === "Module._compile") {
      result.pop();
      break;
    }
    result.push("   " + file + " " + line + " - " + funcName + "()");
  }
  return result.join("\n");
}
