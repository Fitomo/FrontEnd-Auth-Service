const session = require('express-session');
const User = require('../models/UserModel.js');
// const JawboneStrategy = require('passport-jawbone').Strategy;
// const JawboneStrategy = require('passport-oauth').OAuth2Strategy;
// const JawboneStrategy = require('passport-jawbone').Strategy;
// const jawboneAuth = {
//   clientID: 'OWoCNkdQw6U',
//   clientSecret: '9aa9e0a20c1b7279a416537e7b13b80b5c1c7155',
//   authorizationURL: 'https://jawbone.com/oauth2/auth',
//   tokenURL: 'https://jawbone.com/auth/oauth2/token',
//   callbackURL: 'http://127.0.0.1:8080/auth/jawbone/callback',
// }


module.exports = (app, express, passport) => {
  app.use(session({
    name: 'fitomo',
    secret: 'fitomo',
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  // passport.use(new JawboneStrategy({
  //   clientID: 'OWoCNkdQw6U',
  //   clientSecret: '9aa9e0a20c1b7279a416537e7b13b80b5c1c7155',
  //   callbackURL: 'http://127.0.0.1:8080/auth/jawbone/callback',
  //   passReqToCallback: true,
  // },
  // (req, token, refreshToken, profile, done) => {
  //   User.findOrCreate({ jawboneId: profile.meta.user_xid }, (err, user) => done(err, user));
  // }
  // ));




//   passport.use('jawbone', new JawboneStrategy({
// 	clientID: jawboneAuth.clientID,
// 	clientSecret: jawboneAuth.clientSecret,
// 	authorizationURL: jawboneAuth.authorizationURL,
// 	tokenURL: jawboneAuth.tokenURL,
// 	callbackURL: jawboneAuth.callbackURL
// }, function(token, refreshToken, profile, done) {
// 	var options = {
// 			access_token: token,
// 			client_id: jawboneAuth.clientID,
// 			client_secret: jawboneAuth.clientSecret
// 		},
// 		up = require('jawbone-up')(options);
//     return done(null);
//   }))




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
