var Yo = require('ympc-yo');

exports.register = function (server, options, next) {

  var yo = new Yo(options.apiKey);

  server.method('yo.send', yo.yo.bind(yo));
  server.method('yo.sendAll', yo.yoAll.bind(yo));
  server.method('yo.sendLink', yo.yoLink.bind(yo));
  server.method('yo.getSubscriberCount', yo.getSubscriberCount.bind(yo));

  next();
};

exports.register.attributes = {
  'name': 'yo'
};
