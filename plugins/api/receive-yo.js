var url = require('url');
var boom = require('boom');
var assign = require('object-assign');
var cuid = require('cuid');
var log = require('bole')('api');

module.exports = function (request, reply) {

  var appUrl = request.server.settings.app.uri;
  var username = request.query.username;
  var getUserToken = request.server.methods.getUserToken;
  var sendYoLink = request.server.methods.yoqueue.sendLink;

  var payload = {
    userId: username,
    token: getUserToken(username),
    ref: 'app',
    yoid: cuid()
  };

  var parsedLink = url.parse(appUrl, true);
  parsedLink.search = null;
  parsedLink.pathname = '/feed';
  assign(parsedLink.query, {
    username: payload.userId,
    token: payload.token,
    yoid: payload.yoid,
    yoref: payload.ref
  });

  payload.link = url.format(parsedLink);

  sendYoLink(payload)
    .then(function () {
      reply({ status: 'ok' });
    })
    .catch(function (err) {
      log.error(err);
      reply(boom.badImplementation());
    });

};
