var boom = require('boom');
var log = require('bole')('api');

module.exports = function (request, reply) {

  var username = request.params.username;
  var getFeed = request.server.methods.db.getFeed;

  getFeed(username)
    .then(function (episodes) {
      reply(episodes);
    })
    .catch(function (err) {
      log.error(err);
      reply(boom.badImplementation());
    });

};
