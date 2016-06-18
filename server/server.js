require('babel-register');

const express = require('express');
const app = express();
const http = require('http').Server(app);
const environment = require('dotenv');

// Load environment variables
if (process.env.NODE_ENV === 'development') {
  environment.config({ path: '../env/development.env' });
} else if (process.env.NODE_ENV === 'production') {
  environment.config({ path: '../env/production.env' });
}

// Initial Configuration, Static Assets, & View Engine Configuration
require('./config/initialize.js')(app, express);

// Authentication Middleware: Express Sessions, Passport Strategy
require('./config/auth.js')(app);

// Pre-Authentication Routes & OAuth Requests
require('./routes/auth-routes.js')(app);

// View Routes
require('./routes/view-routes.js')(app);

// API Routes
require('./routes/api-routes.js')(app);

// Wildcard route
// app.get('/*', (req, res) => {
//   res.redirect('/');
// });


// const FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;
// const JawboneStrategy = require('passport-jawbone').Strategy;
// const User = require('./models/UserModel.js');
// passport.use(new FitbitStrategy({
//   clientID: '227TZQ',
//   clientSecret: '79dcfac0d3d8cd8b5355f8ca127817ff',
//   callbackURL: '/auth/fitbit/callback',
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
// app.get('/auth/fitbit', () => {
//   passport.authenticate('fitbit', {
//     scope: ['activity', 'heartrate', 'location', 'profile', 'sleep', 'social'],
//   });
// });
// app.get('/auth/fitbit/callback', () => {
//   passport.authenticate('fitbit', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//   });
// });


http.listen(8080, 'localhost', () => {
  console.log('Listening on 8080...');
});
