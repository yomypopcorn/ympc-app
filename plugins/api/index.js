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
      handler: require('./get-shows'),
      config: {
        validate: {
          query: {
            compact: Joi.number().integer().optional()
          }
        }
      }
    },

    {
      method: 'GET',
      path: '/api/users/{username}/feed',
      handler: require('./user-get-feed'),
      config: {
        validate: {
          query: {
            token: Joi.string().required()
          }
        },
        auth: 'yotoken'
      }
    },

    {
      method: 'GET',
      path: '/api/users/{username}/shows',
      handler: require('./user-get-shows'),
      config: {
        validate: {
          query: {
            token: Joi.string().required(),
            compact: Joi.number().integer().optional()
          }
        },
        auth: 'yotoken'
      }
    },

    {
      method: 'POST',
      path: '/api/users/{username}/shows',
      handler: require('./user-subscribe-show'),
      config: {
        validate: {
          query: {
            token: Joi.string().required(),
          },
          payload: {
            imdb_id: Joi.string().required()
          }
        },
        auth: 'yotoken'
      }
    },

    {
      method: 'DELETE',
      path: '/api/users/{username}/shows/{imdb_id}',
      handler: require('./user-unsubscribe-show'),
      config: {
        validate: {
          query: {
            token: Joi.string().required()
          }
        },
        auth: 'yotoken'
      }
    },

    {
      method: 'GET',
      path: '/api/yo',
      handler: require('./receive-yo'),
      config: {
        validate: {
          query: {
            username: Joi.string().required(),
            secret: Joi.string().required(),
            user_ip: Joi.string().optional(),
            link: Joi.string().optional()
          }
        },
        auth: 'yo'
      }
    },

  ];

  server.route(routes);

  next();
};

exports.register.attributes = {
  'name': 'api'
};
