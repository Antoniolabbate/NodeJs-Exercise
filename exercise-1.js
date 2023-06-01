

const Crypto = require('crypto')

const randomID = Crypto.randomBytes(920).toString('hex')
console.log(randomID);