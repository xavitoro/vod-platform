import express from 'express'
import api from './api/api'
import err from './middleware/err'
import path from 'path'
import morgan from 'morgan'

var app = express()
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
  console.log(path.join(__dirname, '../public'))
  app.use('/public', express.static(path.join(__dirname, '../public')))
  app.use(express.static(path.join(__dirname, '../dist')))
  app.use(morgan('dev'))
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

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

module.exports = app
