var Joi = require('joi');

exports.register = function (server, options, next) {

  var routes = [

    {
      method: 'GET',
      path: '/hello',
      handler: require('./hello')
    },

    {
      method: 'GET',
      path: '/shows',
      handler: require('./get-shows')
    },

    {
      method: 'GET',
      path: '/users/{username}/feed',
      handler: require('./user-get-feed')
    },

    {
      method: 'GET',
      path: '/users/{username}/shows',
      handler: require('./user-get-shows')
    },

    {
      method: 'POST',
      path: '/users/{username}/shows',
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
      path: '/users/{username}/shows/{imdb_id}',
      handler: require('./user-unsubscribe-show')
    },

  ];

  server.route(routes);

  next();
};

exports.register.attributes = {
  'name': 'api'
};
