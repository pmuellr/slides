#!/usr/bin/env node

'use strict'

// get the ***Hawg functions
const cpuHawg = require('./cpu-hawg')
const memHawg = require('./mem-hawg')

// run them Hawgs!
setImmediate(cpuHawg)
setImmediate(memHawg)
