var express = require('express');
var app = express();
var api = require('./api/api');
var err = require('./middleware/err')
var path = require('path')

// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api', api);

// set up global error handling
// // pattern 1
// app.use(err);
// pattern 2
app.use(err());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

module.exports = app;
