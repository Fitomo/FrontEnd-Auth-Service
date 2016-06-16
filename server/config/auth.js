var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
// var User = require('../models/UserModel.js');

module.exports = function(app, express, passport) {

  app.use(session({
      name: 'fitomo',
      secret: 'fitomo',
    }))

  app.use(passport.initialize());
  app.use(passport.session());

};
