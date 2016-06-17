const session = require('express-session');
// const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
// const JawboneStrategy = require('passport-jawbone').Strategy;
const User = require('../models/UserModel.js');


module.exports = (app, express, passport) => {
  app.use(session({
    name: 'fitomo',
    secret: 'fitomo',
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  // // Passport Fitbit OAuth Strategy
  // passport.use(new FitbitStrategy({
  //   clientID: '227TZQ',
  //   clientSecret: '79dcfac0d3d8cd8b5355f8ca127817ff',
  //   callbackURL: 'http://localhost:8080/auth/fitbit/callback',
  // },
  // (accessToken, refreshToken, profile, done) => {
  //   console.log('profile', profile);
  //   User.find({ fitbit_id: profile.id }, (err, user) => {
  //     if (!user) {
  //       new User({ fitbit_id: profile.id })
  //         .save()
  //         .then((saveError, savedUser) => done(saveError, savedUser));
  //     }
  //   });
  // }
  // ));
  //
  // // Passport Jawbone OAuth Strategy
  // passport.use(new JawboneStrategy({
  //   clientID: 'OWoCNkdQw6U',
  //   clientSecret: '9aa9e0a20c1b7279a416537e7b13b80b5c1c7155',
  //   callbackURL: '/auth/jawbone/callback',
  //   passReqToCallback: true, // lets Jawbone check if a user is logged in or not
  // },
  // (req, token, refreshToken, profile, done) => {
  //   User.find({ jawbone_id: profile.meta.user_xid }, (err, user) => {
  //     if (!user) {
  //       new User({ jawbone_id: profile.meta.user_xid })
  //         .save()
  //         .then((saveError, savedUser) => done(saveError, savedUser));
  //     }
  //   });
  // }
  // ));

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
