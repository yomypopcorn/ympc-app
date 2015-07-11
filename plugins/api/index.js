exports.register = function (server, options, next) {

  var routes = [
    {
      method: 'GET',
      path: '/hello',
      handler: require('./hello')
    }
  ];

  server.route(routes);

  next();
};

exports.register.attributes = {
  'name': 'api'
};
