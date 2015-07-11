exports.register = function api (server, options, next) {

  var routes = [
    {
      method: 'GET',
      path: '/hello',
      handler: function (request, reply) {
        reply({ hello: 'myfriend' });
      }
    }
  ];

  server.route(routes);

  next();
};

exports.register.attributes = {
  'name': 'api'
};
