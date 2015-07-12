var config = require('../config');

module.exports = [
  {
    register: require('good'),
    options: {
      reporters: [
        {
          reporter: require('good-console'),
          events: { log: '*', response: '*' }
        }
      ]
    }
  },
  {
    register: require('./db'),
    options: config
  },
  {
    register: require('./yo'),
    options: { apiKey: config.yoApiKey }
  },
  {
    register: require('./api')
  }
];
