var User = require('./userModel.js');
var bcrypt = require('bcrypt-nodejs');

module.exports = {

  createUser: function(req, res) {
    var user = new User(req.body);
    user.save(function(err, result) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    })
  },

  updateUser: function(req, res) {
    User.findById(req.body.id, function(err, result) {
      var newInfo = result;
      newInfo.password = generateHash(req.body.password);
      newInfo.firstName = req.body.firstName;
      newInfo.lastName = req.body.lastName;
      newInfo.email = req.body.email;
      User.findByIdAndUpdate(req.body.id, {$set: newInfo}, {new: true}, function(err, result) {
        if(err) {
          res.status(500).send(err);
        } else {
          res.status(200).json(result);
        }
      })

    })
  }

}; //end

var generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
