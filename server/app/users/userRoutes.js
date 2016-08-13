var userCtrl = require('./userCtrl.js');

module.exports = function(app) {

  app.post('/api/createuser', userCtrl.createUser);
  app.put('/api/updateprofile', userCtrl.updateUser);


}; //end
