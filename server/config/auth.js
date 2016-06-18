const session = require('express-session');
const User = require('../models/UserModel.js');


module.exports = (app, express, passport) => {
  app.use(session({
    name: 'fitomo',
    secret: 'fitomo',
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.serializeUser((user, done) => {
    done(null, user.get('id'));
  });

  passport.deserializeUser((id, done) => {
    User.where({ id })
      .fetch()
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
  });
};
