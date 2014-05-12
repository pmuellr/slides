var winston = require("winston")

winston.remove(winston.transports.Console)
winston.add(winston.transports.Console, { level:"warn" })
winston.add(winston.transports.File, {
	filename: "somefile.log" }
)

winston.info("info message")
winston.warn("warning message")
winston.error("error message")

// prints:
// warn: warning message
// error: error message