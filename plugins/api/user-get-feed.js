module.exports = function (request, reply) {

  var username = request.params.username;
  var getFeed = request.server.methods.db.getFeed;

  getFeed(username, function (err, episodes) {
    if (err) {
      log.error(err);
      return reply(boom.badImplementation());
    }

    reply(episodes);
  });

};
