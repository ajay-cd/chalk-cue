var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var environment = process.env.ENV|| 'development';

var vhost = 'nodejsapp.local';
var port;
var server_detail = {};

if(environment === "production") {
  port = 5500;
    server_detail = {host:"54.225.122.8", self_port:7700, protocol:"http://", env:"production"}
} else if(environment === "staging") {
  port = 80;
    server_detail = {host:"54.225.122.8", self_port:80, protocol:"http://", env:"staging"}
} else {
  port = 3000;
    server_detail = {host:"54.225.122.8", self_port:6600, protocol:"http://", env:"others"}
}

var app = express();

app.set('port', port);
// view engine setup
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(app.router);

require('./routes/app.js')(app, server_detail);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
/**
 * Create HTTP server.
 */
var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + vhost+":"+server.address().port);
});
