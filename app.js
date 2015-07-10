var express = require('express');
var http    = require('http');
var Yo      = require('./yo-api');

var APIKEY  = process.env.YO_APIKEY;
var PORT    = process.env.YO_PORT;
var yo      = new Yo(APIKEY);

var app     = express();

app.get('/welcome', function (req, res) {
  console.log(req.url);
  res.end('welcome');
});

app.get('/callback', function (req, res) {
  console.log(req.url);
  res.end('callback');

  var username = req.query.username;
  yo.yoLink(username, 'http://yo.immaterial.io/hello?username=' + username, function (err) {
    console.log('error', err);
  });
});

app.get('/hello', function (req, res) {
  console.log(req.url);
  var username = req.query.username;
  res.end('hello ' + username);
});

http.createServer(app).listen(PORT);
