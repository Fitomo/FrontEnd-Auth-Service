// GET RID OF FITBIT CLIENT KEYS

const FitbitClient = require('fitbit-client-oauth2');
const client = new FitbitClient('227V3M', 'fde5c9f2a90368d2bc20b4a5d60dd76c');
const redirectUri = `http://${process.env.HOST_IP}:${process.env.HOST_PORT}/auth/fitbit/callback`;
const User = require('../models/UserModel.js');
const moment = require('moment');
const io = require('socket.io-emitter')({ host: process.env.REDIS_DB, port: 6379 });

module.exports = {
  fitbitLogin: (req, res) => {
    // Defined scope of request for Fitbit
    const scope = 'activity profile settings sleep weight heartrate';
    console.log('redirectUri', redirectUri);
    const authorizationUri = client.getAuthorizationUrl(redirectUri, scope);
    console.log('authuri', authorizationUri);
    res.redirect(authorizationUri);
  },

  fitbitCallback: (req, res, done) => {
    const code = req.query.code;
    client.getToken(code, redirectUri)
    .then((token) => {
      const fitbitId = token.token.user_id;
      User.where({ fitbit_id: fitbitId })
        .fetch()
        .then(user => {
          // If there is no such user in the database, create one
          if (!user) {
            const newUser = new User({
              device: 'Fitbit',
              fitbit_id: fitbitId,
              accessToken: token.token.access_token,
              refreshToken: token.token.refresh_token,
              date: moment().format('YYYYMMDD'),
              steps: 0,
              calories: 0,
              followers: '[]',
              following: '[]',
            });
            newUser.save()
              .then((saveError, savedUser) => {
                req.session.user = newUser.get('id');
                req.session.save();
                done(saveError, savedUser);
              });
          } else {
            // Otherwise, reset access and refresh tokens
            user.set({
              accessToken: token.token.access_token,
              refreshToken: token.token.refresh_token,
            }).save();
            req.session.user = user.get('id');
            req.session.save();
          }
          return user;
        })
        .then((user) => {
          setTimeout(() => {
            io.emit('action', { type: 'LOGIN', data: '' });
          }, 800);
          res.status(302).redirect('/');
        });
    })
    .catch((err) => {
      res.status(500).send('Error signing user into Fitbit:', err);
    });
  },
};
