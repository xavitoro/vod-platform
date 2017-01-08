var morgan = require('morgan')
var bodyParser = require('body-parser')
var express = require('express')
var path = require('path')
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

var userModel = require('../api/user/userModel')

var env = process.env.NODE_ENV || 'development'
const secretKey = process.env.SECRET_KEY || 'vodvod';

// SETUP global middleware here
module.exports = function(app) {
  if (env === 'development') {
    var webpack = require('webpack')
    var config = require('../../webpack.config')
    var compiler = webpack(config)
    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }))
    app.use(require('webpack-hot-middleware')(compiler))
    console.log(path.join(__dirname, '../public'))
    app.use('/public', express.static(path.join(__dirname, '../../public')))
    app.use(express.static(path.join(__dirname, '../../dist')))
    app.use(morgan('dev'))
  }
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(userModel.authenticate()));

  passport.serializeUser(userModel.serializeUser());
  passport.deserializeUser(userModel.deserializeUser());
};
