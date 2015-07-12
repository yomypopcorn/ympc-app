var boom = require('boom');
var log = require('bole')('api');

module.exports = function (request, reply) {

  var username = request.query.username;
  var sendLink = request.server.methods.yo.sendLink;

  console.log('ツ', username);

  var feedsLink = 'http://yomypopcorn.com/feed?username=' + username;

  sendLink('MANUELSTOFER', feedsLink, function (err) {
    console.log('タ', err);
  });

  sendLink(username, feedsLink, function (err) {
    if (err) {
      console.log(err);
      log.error(err);

      return reply(boom.badImplementation());
    }

    reply({ status: 'ok' });
  });

};
