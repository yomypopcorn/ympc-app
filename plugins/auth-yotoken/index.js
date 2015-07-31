var boom = require('boom');
var utils = require('ympc-utils');

exports.register = function (plugin, options, next) {

  var getUserToken = function (username) {
    return utils.generateUserToken(options.secret, username);
  };

  var validateUserToken = function (username, token) {
    return utils.validateUserToken(options.secret, username, token);
  };

  plugin.method('getUserToken', getUserToken);
  plugin.method('validateUserToken', validateUserToken);

  var auth = function (server) {
    var scheme = {

      authenticate: function (request, reply) {
        var token = request.query.token;
        var username = request.params.username || request.query.username;

        if (!token || !username) {
          return reply(boom.unauthorized('Missing credentials'));
        }

        var isValid = validateUserToken(username, token);

        if (!isValid) {
          return reply(boom.unauthorized('Invalid credentials'));
        }

        reply.continue({
          credentials: {
            username: username
          }
        });
      },

    };

    return scheme;
  };

  plugin.auth.scheme('yotoken', auth);
  plugin.auth.strategy('yotoken', 'yotoken', {});

  next();
};

exports.register.attributes = {
  name: 'auth-yotoken'
};
