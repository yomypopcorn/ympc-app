var path = require('path');
var hapi = require('hapi');
var handlebars = require('handlebars');
var bole = require('bole');
var log = bole('server');
var usertoken = require('./usertoken');
var config = require('./config');

var server = new hapi.Server();

server.views({
  engines: {
    hbs: handlebars
  },
  relativeTo: __dirname,
  path: './templates',
  helpersPath: './templates/helpers',
  partialsPath: './templates/partials',
  layoutPath: './templates/layouts',
  layout: 'default'
});

server.connection({
  address: config.address,
  port: config.port,
  uri: config.uri,
  routes: { cors: config.enableCors }
});

server.route({
  method: 'GET',
  path: '/assets/{path*}',
  handler: {
    directory: {
      path: path.join(__dirname, 'static/assets'),
      listing: false
    }
  }
});

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: function (request, reply) {
    var username = request.query.username;
    var secret = config.yoApiKey;
    var token = usertoken.generate(username, secret);

    reply.view('index', {
      token: token
    });
  }
});

var plugins = require('./plugins');
server.register(plugins, function (err) {
  if (err) { throw err; }

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });
});
