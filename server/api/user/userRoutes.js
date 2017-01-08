const userRouter = require('express').Router();
const passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
const jwt = require('jsonwebtoken');
const userModel = require('./userModel');
const logger = require('../../util/logger');
const authMiddleware = require('../../middleware/authMiddleware');
const LocalStrategy = require('passport-local').Strategy;

userRouter.use(cookieParser());
userRouter.use(session({keys: ['secretkey1', 'secretkey2', '...']}));


const secretKey = process.env.SECRET_KEY || 'vodvod';

userRouter.use(passport.initialize());
userRouter.use(passport.session());
passport.use(new LocalStrategy(userModel.authenticate()));
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

userRouter.get('/', authMiddleware.checkUser, function(req, res) {
  userModel.find({}, function(err, users) {
    if (err) {
      return res.status(403).send(err);
    }
    // object of all the users
    res.status(200).send(users);
  });
});

userRouter.get('/:id', function(req, res) {
  userModel.findById(req.params.id, function(err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    // show the one user
    res.status(200).send(user);
  });
});

userRouter.post('/register', function(req, res) {
  console.log(req.body)
  userModel.register(new userModel({
    username : req.body.username,
    email : req.body.email,
    isAdmin: false
  }), req.body.password, function(err, user) {
     if (err) {
        return res.status(403).send(err);
     }

     passport.authenticate('local')(req, res, function () {

       var token = jwt.sign(user, secretKey);

       res.status(200).send({
         user: user,
         token: token
       });
     });
  });
});

userRouter.post('/login', passport.authenticate('local'), function(req, res) {
  var user = req.user;

  var token = jwt.sign(user, secretKey);

  res.status(200).json({
    user: user,
    token: token
  });
});

userRouter.get('/logout', function(req, res) {
    req.currentUser = null;
    req.userIsAdmin = false;
    res.status(204);
});


module.exports = userRouter;
