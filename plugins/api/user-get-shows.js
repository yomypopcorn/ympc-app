module.exports = function (request, reply) {

  var username = request.params.username;
  var getUserShows = request.server.methods.db.getUserShows;

  getUserShows(username, true, function (err, shows) {
    if (err) {
      log.error(err);
      return reply(boom.badImplementation());
    }

    reply(shows);
  });

};
