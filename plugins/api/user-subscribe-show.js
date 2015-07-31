var boom = require('boom');
var log = require('bole')('api');

module.exports = function (request, reply) {

  var showId = request.payload.show_id;
  var username = request.params.username;
  var subscribeShow = request.server.methods.db.subscribeShow;

  subscribeShow(username, showId)
    .then(function () {
      reply({ status: 'ok' }).code(201);
    })
    .catch(function (err) {
      log.error(err);
      reply(boom.badImplementation());
    });

};
