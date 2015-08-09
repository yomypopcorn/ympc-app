var boom = require('boom');
var log = require('bole')('api');

module.exports = function (request, reply) {

  var showId = request.query.showId;
  var sien = request.query.sien;
  var username = request.params.username;
  var removeItemFromFeed = request.server.methods.db.removeItemFromFeed;

  removeItemFromFeed(username, showId, sien)
    .then(function () {
      reply({ status: 'ok' }).code(201);
    })
    .catch(function (err) {
      log.error(err);
      reply(boom.badImplementation());
    });

};
