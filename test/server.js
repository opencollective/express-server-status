var express = require('express');
var serverStatus = require('../index');
var app = express();

app.use('/status', serverStatus(app));

app.get('/', function(req, res) {
  res.send("Homepage");
});

app.get('/slow', function(req, res) {
  setTimeout(function() {
    res.send("slow");
  }, 1000);
});

app.get('/groups/:slug', function(req, res) {
  res.send("Hello " + req.params.slug);
});

app.listen(process.env.PORT || 3001);