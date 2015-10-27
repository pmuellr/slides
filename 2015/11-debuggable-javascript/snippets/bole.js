const bole = require("bole")

const log = bole("myapp")
bole.output({ level: "info", stream: process.stdout })

log.info("hi")

// prints
// {"time":"2015-10-27T03:56:45.762Z",
//  "hostname":"my-hostname", "pid":53014,
//  "level":"info", "name":"myapp", "message":"hi"}

// du -h bole - 144K
