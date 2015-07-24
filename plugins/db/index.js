var async = require('async');
var ympdb = require('yomypopcorn-dbclient');

exports.register = function (server, options, next) {

  var db = ympdb({
    socket: options.redisSocket,
    host: options.redisHost,
    port: options.redisPort,
    password: options.redisPassword
  });

  function getShows (compact, callback) {
    // NOTE: compact does nothing yet
    compact = true;

    db.getActiveShowIds(function (err, ids) {
      if (err) { return callback(err); }

      async.map(ids, function (id, callback) {
        db.getShow(id, function (err, show) {
          if (err) { return callback(err);}

          callback(err, {
            id: show.id,
            imdb_id: show.imdb_id,
            title: show.title,
            rating: show.rating
          });
        });

      }, function (err, shows) {
        callback(err, shows);
      });
    });
  }

  function getUserShows (username, compact, callback) {
    // NOTE: compact does nothing yet
    compact = true;

    db.getSubscriptions(username, function (err, ids) {
      if (err) { return callback(err); }

      async.map(ids, function (id, callback) {
        db.getShow(id, function (err, show) {
          if (err) { return callback(err);}

          callback(err, {
            id: show.id,
            imdb_id: show.imdb_id,
            title: show.title,
            rating: show.rating
          });
        });

      }, function (err, shows) {
        callback(err, shows);
      });
    });
  }

  function subscribeShow (username, showId, callback) {
    db.subscribeShow(username, showId, callback, callback);
  }

  function unsubscribeShow (username, showId, callback) {
    db.unsubscribeShow(username, showId, callback, callback);
  }

  function getFeed (username, callback) {
    db.getFeed(username, callback);
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
