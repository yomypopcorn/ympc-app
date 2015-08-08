var assign = require('object-assign');

module.exports = function (request, reply) {
  var settings = request.server.settings;

  reply({
    name: settings.app.pkg.name,
    version: settings.app.pkg.version,
    uptime: process.uptime() * 1000
  });
};
