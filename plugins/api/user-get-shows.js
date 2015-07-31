var boom = require('boom');
var log = require('bole')('api');

module.exports = function (request, reply) {

  var username = request.params.username;
  var getUserShows = request.server.methods.db.getUserShows;

  getUserShows(username, true)
    .then(function (shows) {
      reply(shows);
    })
    .catch(function (err) {
      log.error(err);
      reply(boom.badImplementation());
    });

};
