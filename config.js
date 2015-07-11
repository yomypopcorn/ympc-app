var defaults = {
  logLevel: 'info',
  address: '0.0.0.0',
  port: 9987,
  enableCors: true,
  uri: 'http://localhost:9987',
  yoApiKey: 'yolo',
  redisSocket: null,
	redisHost: '127.0.0.1',
	redisPort: 6379,
	redisPassword: null,
};

module.exports = require('rc')('yomypopcorn-service', defaults);
