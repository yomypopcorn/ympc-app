var url = require('url');
var kue = require('kue');
var Promise = require('bluebird');
var log = require('bole')('yoqueue');

exports.register = function (server, options, next) {

  var q = options.socket
    ? kue.createQueue({
        prefix: 'queue',
        redis: {
          socket: options.socket,
          auth: options.password
        }
      })

    : kue.createQueue({
      prefix: 'queue',
      redis: {
        port: options.port,
        host: options.host,
        auth: options.password
      }
    });

    var sendYoLink = function (payload) {
      return new Promise(function (resolve, reject) {
        var job = q.create('sendyo', payload)
          .priority('high')
          .attempts(5)
          .backoff({ delay: 2 * 60 * 1000, type: 'fixed' })
          .save(function (err) {
            if (err) { return reject(err); }

            log.info('created sendyo job:', job.id, {
              userId: payload.userId,
              yoid: payload.yoid
            });
            resolve();
          });
      });
    };

  server.method('yoqueue.sendLink', sendYoLink);

  next();
};

exports.register.attributes = {
  name: 'yoqueue'
};
