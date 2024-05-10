const crypto = require("crypto")

const secret = crypto.randomBytes(32).toString("hex")

console.log(secret) //516059883fcb03309401b2eadce27579e5020554fd1f1a7a39a19accd82b6d14