var userCtrl = require('./userCtrl.js');

module.exports = function(app) {

  app.post('/api/createuser', userCtrl.createUser);
  app.put('/api/updateprofile', userCtrl.updateUser);
  app.get('/api/getusers', userCtrl.getusers);
  app.get('/api/getProfile/:id', userCtrl.getProfile);



}; //end
