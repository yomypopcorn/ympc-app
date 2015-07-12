var Joi = require('joi');

exports.register = function (server, options, next) {

  var routes = [

    {
      method: 'GET',
      path: '/api/hello',
      handler: require('./hello')
    },

    {
      method: 'GET',
      path: '/api/shows',
      handler: require('./get-shows')
    },

    {
      method: 'GET',
      path: '/api/users/{username}/feed',
      handler: require('./user-get-feed')
    },

    {
      method: 'GET',
      path: '/api/users/{username}/shows',
      handler: require('./user-get-shows')
    },

    {
      method: 'POST',
      path: '/api/users/{username}/shows',
      handler: require('./user-subscribe-show'),
      config: {
        validate: {
          payload: {
            imdb_id: Joi.string().required()
          }
        }
      }
    },

    {
      method: 'DELETE',
      path: '/api/users/{username}/shows/{imdb_id}',
      handler: require('./user-unsubscribe-show')
    },

    {
      method: 'GET',
      path: '/api/yo',
      handler: require('./receive-yo'),
      config: {
        validate: {
          query: {
            username: Joi.string().required()
          }
        }
      }
    },

  ];

  server.route(routes);

  next();
};

exports.register.attributes = {
  'name': 'api'
};
