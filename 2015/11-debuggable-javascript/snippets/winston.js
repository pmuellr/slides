const winston = require("winston")

const transports = winston.transports

winston.remove(transports.Console)
winston.add(transports.Console, { level: "warn" })
winston.add(transports.File, { filename: "x.log" })

winston.info("info message")
winston.warn("warning message")
winston.error("error message")

// prints:
// warn: warning message
// error: error message
