var ympcdb = require('ympc-dbclient');

exports.register = function (server, options, next) {

  var db = ympcdb({
    socket: options.socket,
    host: options.host,
    port: options.port,
    password: options.password
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

  function createYoJob (data) {
    return db.createYoJob(data);
  }

  server.method('db.getShows', getShows);
  server.method('db.getUserShows', getUserShows);
  server.method('db.subscribeShow', subscribeShow);
  server.method('db.unsubscribeShow', unsubscribeShow);
  server.method('db.getFeed', getFeed);
  server.method('db.createYoJob', createYoJob);

  next();
};

exports.register.attributes = {
  'name': 'db'
};
