var mongoose = require('mongoose');
var mongoURI = 'mongodb://admin:admin@ds145245.mlab.com:45245/torch';

module.exports = function() {

  mongoose.connect(mongoURI);

  mongoose.connection.once('open', function() {
    console.log('Connection to MongoDB successful!');
  });

};
