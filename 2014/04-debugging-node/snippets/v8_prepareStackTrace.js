function a() { b() }
function b() { c() }
function c() { throw new Error("foo blatz") }

Error.prepareStackTrace = function(error, structuredStackTrace) {
	// ... lots of goopy code ...
//!hide
	var stackTraceLineString = v8PrepareStackTrace(error, structuredStackTrace)
//!show
	return stackTraceLineString
}

try { a() } catch(err) { console.log(err.stack) }

// prints:
// Error: foo blatz
//    v8_prepareStackTrace.js  14 - c()
//    v8_prepareStackTrace.js  13 - b()
//    v8_prepareStackTrace.js  12 - a()
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
    funcName = func.displayName || func.name || callSite.getFunctionName();
    if (funcName === "Module._compile") {
      result.pop();
      break;
    }
    result.push("   " + file + " " + line + " - " + funcName + "()");
  }
  return result.join("\n");
}
