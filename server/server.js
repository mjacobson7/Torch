var app = require('./config/express.js')();
require('./config/database.js')();
require('./config/passport')(app);
require('./app/users/userRoutes.js')(app);
var port = 3000;

app.listen(port, function() {
  console.log('The magic happens on port ' + port);
});

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});
