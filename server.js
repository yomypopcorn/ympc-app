var path = require('path');
var hapi = require('hapi');
var Joi = require('joi');
var handlebars = require('handlebars');
var bole = require('bole');
var log = bole('server');
var config = require('./config');
var assign = require('object-assign');
var pkg = require('./package.json');

var server = new hapi.Server({
  app: assign({}, config, { pkg: pkg })
});

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
  address: server.settings.app.address,
  port: server.settings.app.port,
  uri: server.settings.app.uri,
  routes: { cors: server.settings.app.enableCors }
});

var plugins = require('./plugins');

server.register(plugins, function (err) {
  if (err) { throw err; }

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
      var getUserToken = request.server.methods.getUserToken;
      var username = request.query.username;
      var token = getUserToken(username);

      reply.view('index', {
        token: token
      });
    },
    config: {
      validate: {
        query: {
          username: Joi.string().required(),
          user_ip: Joi.string().optional(),
          token: Joi.string().required(),
          yoid: Joi.string().optional(),
          yoref: Joi.string().optional()
        }
      },
      auth: 'yotoken'
    }
  });

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });
});
