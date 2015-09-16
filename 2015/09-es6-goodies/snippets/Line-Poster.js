"use strict"

const _ = require("underscore")

const interpolate = require("./interpolate")

module.exports = function LinePoster(lines) {
  lines = lines || []

  return function p(strings /*, value, value */) {
    if (!strings) return lines.join('\n')

    const values = _.toArray(arguments).slice(1)

    lines.push( interpolate(strings, values))
  }
}
