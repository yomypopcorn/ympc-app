var boom = require('boom');
var log = require('bole')('api');

module.exports = function (request, reply) {

  var showId = request.params.show_id;
  var username = request.params.username;
  var unsubscribeShow = request.server.methods.db.unsubscribeShow;

  unsubscribeShow(username, showId)
    .then(function () {
      reply({ status: 'ok' }).code(201);
    })
    .catch(function (err) {
      log.error(err);
      reply(boom.badImplementation());
    });

};
