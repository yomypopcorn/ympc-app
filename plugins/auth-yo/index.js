var boom = require('boom');

exports.register = function (plugin, options, next) {

  var auth = function (server) {
    var scheme = {

      authenticate: function (request, reply) {
        var secret = request.query.secret;
        var isValid = ( secret === options.secret );

        if (!isValid) {
          return reply(boom.unauthorized());
        }

        reply.continue({
          credentials: 'yeah'
        });
      },

    };

    return scheme;
  };

  plugin.auth.scheme('yo', auth);
  plugin.auth.strategy('yo', 'yo', {});

  next();
};

exports.register.attributes = {
  name: 'auth-yo'
};
