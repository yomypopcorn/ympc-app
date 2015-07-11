var defaults = {
  logLevel: 'info',
  address: '0.0.0.0',
  port: 9987,
  enableCors: true,
  uri: 'http://localhost:9987',
  yoApiKey: 'yolo'
};

module.exports = require('rc')('yomypopcorn-service', defaults);
