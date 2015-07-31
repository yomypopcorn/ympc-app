var boom = require('boom');
var log = require('bole')('api');

module.exports = function (request, reply) {

  var getShows = request.server.methods.db.getShows;

  getShows(true)
    .then(function (shows) {
      reply(shows);
    })
    .catch(function (err) {
      log.error(err);
      reply(boom.badImplementation());
    });

};
