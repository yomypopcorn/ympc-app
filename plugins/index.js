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
    register: require('./auth-yo'),
    options: { secret: config.get('yo.apikey') }
  },
  {
    register: require('./auth-yotoken'),
    options: { secret: config.get('yo.apikey') }
  },
  {
    register: require('./db'),
    options: config.get('redis')
  },
  {
    register: require('./yoqueue'),
    options: config.get('redis')
  },
  {
    register: require('./api')
  }
];
