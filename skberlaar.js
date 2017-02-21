var express    = require('express');
var bodyParser = require('body-parser');
//var apn = require('apn');
//var gcm = require('node-gcm');
var join = require('path').join;
var http = require('http');
var path = require('path');

var app = express();

  app.set('port', process.env.PORT || 3001);
  console.log(app.get('port'));
  app.use(bodyParser.urlencoded({ extended: false}));
  app.use(bodyParser.json());


app.get("/alarms/general",function(req,res){

  res.end(JSON.stringify("test gelukt"));
  console.log("test geslaagd !");
});



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});