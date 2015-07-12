var hapi = require('hapi');
var bole = require('bole');
var log = bole('server');
var config = require('./config');

var server = new hapi.Server();

server.connection({
  address: config.address,
  port: config.port,
  uri: config.uri,
  routes: { cors: config.enableCors }
});

var appHandler = { file: 'static/app.html' };

server.route({
    method: 'GET',
    path: '/feeds',
    handler: appHandler
});

server.route({
    method: 'GET',
    path: '/shows',
    handler: appHandler
});

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: {
      path: 'static',
      listing: false
    }
  }
});

var plugins = require('./plugins');
server.register(plugins, function (err) {
  if (err) { throw err; }

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });
});
