
var crypto = require('crypto');

// untested
module.exports = function (username) {
  return crypto
    .createHash('sha1')
    .update(username + process.env.YO_APIKEY)
    .digest('hex')
    .substr(0, 16);
}
