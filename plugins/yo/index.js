var Yo = require('./yo-api');

exports.register = function DB (server, options, next) {

  var yo = new Yo(options.apiKey);

  server.method('yo.send', yo.yo);
  server.method('yo.sendAll', yo.yoAll);
  server.method('yo.sendLink', yo.yoLink);
  server.method('yo.getSubscriberCount', yo.countOfSubscribers);

  next();
};

exports.register.attributes = {
  'name': 'yo'
};
