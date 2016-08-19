var app = require('./server/config/express.js')();
require('./server/config/database.js')();
require('./server/config/passport')(app);
require('./server/app/users/userRoutes.js')(app);
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('The magic happens on port ' + port);
});
