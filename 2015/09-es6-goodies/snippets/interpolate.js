const _ = require("underscore")

//-----------------------------------------------------------------
// f([a1,a2,..], [b1,b2,..]) -> "" + a1 + b1 + a2 + b2 ...
//-----------------------------------------------------------------

module.exports = function interpolate(strings, values) {

  // zip([a1,a2,..], [b1,b2,..])) -> [[a1,b1], [a2,b2], ...]
  strings = _.zip(strings, values)

  // flatten([[a1,b1], [a2,b2], ...]) -> [a1, b1, a2, b2, ...]
  strings = _.flatten(strings)

  return strings.join('')
}
