var mongoose = require('mongoose');
var mongoURI = require('./secrets').database;

module.exports = function () {

  try {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
      console.log("connected"));
  } catch (error) {
    console.log("could not connect");
  }

  mongoose.connection.once('open', function () {
    console.log('Connection to MongoDB successful!');
  });

};
