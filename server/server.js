var express = require('express')
var app = express()
var api = require('./api/api')
var err = require('./middleware/err')
var path = require('path')
var morgan = require('morgan')

var env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  var webpack = require('webpack')
  var config = require('../webpack.config')
  var compiler = webpack(config)
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
  app.use(require('webpack-hot-middleware')(compiler))
  app.use('/public', express.static(path.join(__dirname, '../public')))
  app.use(express.static(path.join(__dirname, '../dist')))
  app.use(morgan('combined'))
}

// setup the app middlware
require('./middleware/appMiddleware')(app)

// setup the api
app.use('/api', api)

// set up global error handling
// // pattern 1
// app.use(err)
// pattern 2
app.use(err())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

module.exports = app
