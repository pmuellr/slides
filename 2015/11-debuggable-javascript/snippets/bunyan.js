const bunyan = require("bunyan")

const log = bunyan.createLogger({name: "myapp"})
log.level("info")

log.info("hi")

// prints
// {"name":"myapp", "hostname":"my-hostname",
//  "pid":49675, "level":30, "msg":"hi",
//  "time":"2015-10-27T03:49:14.759Z", "v":0}

// du -h bunyan - 2.5M
