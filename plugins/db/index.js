var ympcdb = require('ympc-dbclient');

exports.register = function (server, options, next) {

  var db = ympcdb({
    socket: options.redisSocket,
    host: options.redisHost,
    port: options.redisPort,
    password: options.redisPassword
  });

  function getShows (compact) {
    return db.getActiveShowIds()
      .map(db.getShow)
      .map(function (show) {
        if (!compact) { return show; }

        return {
          id: show.id,
          imdb_id: show.imdb_id,
          title: show.title,
          rating: show.rating
        };
      });
  }

  function getUserShows (username, compact) {
    return db.getSubscriptions(username)
      .map(db.getShow)
      .map(function (show) {
        if (!compact) { return show; }

        return {
          id: show.id,
          imdb_id: show.imdb_id,
          title: show.title,
          rating: show.rating
        };
      });
  }

  function subscribeShow (username, showId) {
    return db.subscribeShow(username, showId);
  }

  function unsubscribeShow (username, showId) {
    return db.unsubscribeShow(username, showId);
  }

  function getFeed (username) {
    return db.getFeed(username);
  }

  server.method('db.getShows', getShows);
  server.method('db.getUserShows', getUserShows);
  server.method('db.subscribeShow', subscribeShow);
  server.method('db.unsubscribeShow', unsubscribeShow);
  server.method('db.getFeed', getFeed);

  next();
};

exports.register.attributes = {
  'name': 'db'
};
