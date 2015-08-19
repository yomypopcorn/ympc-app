var defaults = {
  logLevel: 'info',
  address: '0.0.0.0',
  port: 9987,
  cors: true,
  uri: 'http://localhost:9987',
  yo: {
    apikey: 'yolo'
  },
  redis: {
    socket: null,
    host: '127.0.0.1',
    port: 6379,
    password: null
  }
};

var aliases = {
  d: 'debug',
  v: 'version'
};

module.exports = require('rucola')('ympc-app', defaults, aliases);
