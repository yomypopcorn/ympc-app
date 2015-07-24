var boom = require('boom');
var log = require('bole')('api');

module.exports = function (request, reply) {

  var showId = request.params.show_id;
  var username = request.params.username;
  var unsubscribeShow = request.server.methods.db.unsubscribeShow;

  unsubscribeShow(username, showId, function (err) {
    if (err) {
      log.error(err);
      return reply(boom.badImplementation());
    }

    reply({ status: 'ok' });
  });

};
