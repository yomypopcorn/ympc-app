var boom = require('boom');
var log = require('bole')('api');

module.exports = function (request, reply) {

  var getShows = request.server.methods.db.getShows;

  getShows(true, function (err, shows) {
    if (err) {
      log.error(err);
      return reply(boom.badImplementation());
    }

    reply(shows);
  });

};
