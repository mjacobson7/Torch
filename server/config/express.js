var express    = require('express');
var cors       = require('cors');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

module.exports = function() {

  var app = express();

  app.use(express.static(__dirname + '/../../public'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true}));


  return app;

};
