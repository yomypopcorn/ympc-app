var Yo = require('./yo-api');

exports.register = function (server, options, next) {

  var yo = new Yo(options.apiKey);

  server.method('yo.send', yo.yo.bind(yo));
  server.method('yo.sendAll', yo.yoAll.bind(yo));
  server.method('yo.sendLink', yo.yoLink.bind(yo));
  server.method('yo.getSubscriberCount', yo.countOfSubscribers.bind(yo));

  next();
};

exports.register.attributes = {
  'name': 'yo'
};
