var app = require('./config/express.js')();
require('./config/database.js')();
require('./config/passport')(app);
require('./app/users/userRoutes.js')(app);
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('The magic happens on port ' + port);
});
