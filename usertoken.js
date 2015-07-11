
var crypto = require('crypto');

module.exports {
  generate: generate,
  validate: validate
}

function generate(username) {
  return crypto
    .createHash('sha1')
    .update(username + process.env.YO_APIKEY)
    .digest('hex')
    .substr(0, 16);
}


function validate(username, token) {
  return generate(username) == token;
}
