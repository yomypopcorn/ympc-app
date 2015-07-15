var boom = require('boom');
var usertoken = require('./usertoken');

exports.register = function (plugin, options, next) {

  plugin.method('getUserToken', function (username) {
    return usertoken.generate(username, options.secret);
  });

  var auth = function (server) {
    var scheme = {

      authenticate: function (request, reply) {
        var token = request.query.token;
        var username = request.params.username;

        console.log('auth', token, username);

        if (!token || !username) {
          return reply(boom.unauthorized('Missing credentials'));
        }

        var isValid = usertoken.validate(username, options.secret, token);

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
