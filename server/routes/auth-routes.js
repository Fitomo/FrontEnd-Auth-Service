const FitbitAuthController = require('./../controllers/FitbitAuthController.js');
const JawboneAuthController = require('./../controllers/JawboneAuthController.js');
// let request = require('request');
// let passport = require('passport');
// const User = require('../models/UserModel.js');


module.exports = (app) => {
  app.get('/auth/fitbit', FitbitAuthController.fitbitLogin);
  app.get('/auth/fitbit/callback', FitbitAuthController.fitbitCallback);
  app.get('/auth/jawbone', JawboneAuthController.jawboneLogin);
  app.get('/auth/jawbone/callback', JawboneAuthController.jawboneCallback);
};


  // app.get('/',
  // (req, res) => {
  //   console.log(req.session);
  //   if (req.session.user) {
  //     res.sendFile(__dirname + '../../dist/index.html');
  //   } else {
  //    res.render('login');
  //   }
  // });

  // app.get('/login',
  // (req, res) => {
  //   res.render('login');
  // });

  // app.get('/logout/:id',
  // (req, res) => {
  //   req.session.destroy();
  //   res.render('login');
  // });

// passport.serializeUser(function(user, cb) {
//   cb(null, user)
// })

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj)
// })

// var FitbitStrategy = require( 'passport-fitbit-oauth2' ).FitbitOAuth2Strategy;
// passport.use(new FitbitStrategy({
//     clientID:     '227V3M',
//     clientSecret: 'fde5c9f2a90368d2bc20b4a5d60dd76c',
//     callbackURL: "http://127.0.0.1:8080/auth/fitbit/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // User.findOrCreate({ fitbit_id: profile.id }, function (err, user) {
//     //   return done(err, user);
//     // });
//     User.where({fitbit_id: profile.id}).fetch().then(function(user){
//       return done(null, user);
//     })
//   }
// ));

//   app.use(passport.initialize())
//   app.use(passport.session())

//   app.get('/auth/fitbit',
//   passport.authenticate('fitbit', { scope: ['activity','heartrate','location','profile'] }
// ));

// app.get( '/auth/fitbit/callback', passport.authenticate( 'fitbit', { 
//         failureRedirect: '/auth/fitbit/failure',

// }),function(req, res) {
//   console.log('thesesh', req.session);
//           request('http://127.0.0.1:8080/api/user', function(err, response, body) {
//             console.log('the response', body);
//   // setTimeout(() => {
//   //           io.emit('action', { type: 'LOGIN', data: 'bruh' });
//   //           io.emit('action', { type: 'USER_SET', data: body });
//   //         }, 1200);
//             res.status(302).redirect('/');
//           });
//           // .then((response) => {
//           //   return response.json();
//           // })
//           // .then((json) => {
//           //   io.emit('action', { type: 'USER_SET', data: json });
//           //   res.status(302).redirect('/');
//           //   //store.dispatch({ type: 'server/addUserOnline', data: json });
//           // });
          
//     //res.redirect('/upgrade')
//   });

// };