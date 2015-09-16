"use strict"

const _ = require("underscore")

const interpolate = require("./interpolate")

module.exports = function LinePoster(lines) {
  let result = undefined

  return function p(strings /*, value, value */) {
    if (!strings) {
      if (!result) result = lines.join('\n')
      return result
    }

    const values = _.toArray(arguments).slice(1)

    lines.push( interpolate(strings, values))
  }
}
