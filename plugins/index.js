var config = require('../config');

module.exports = [
  {
    register: require('./yo'),
    options: { apiKey: config.yoApiKey }
  },
  {
    register: require('./api')
  }
];
