const FitbitClient = require('fitbit-client-oauth2');
const client = new FitbitClient('227V3M', 'fde5c9f2a90368d2bc20b4a5d60dd76c');
const redirectUri = 'http://127.0.0.1:8080/auth/fitbit/callback';
const User = require('../models/UserModel.js');

module.exports = {
  fitbitLogin: (req, res) => {
    console.log('logging into fitbit');
    const scope = ['activity', 'nutrition', 'profile', 'settings', 'sleep', 'social', 'weight'];
    const authorizationUri = client.getAuthorizationUrl(redirectUri, scope);
    res.redirect(authorizationUri);
  },

  fitbitCallback: (req, res, done) => {
    const code = req.query.code;
    client.getToken(code, redirectUri)
    .then((token) => {
      // ... save your token on db or session...
      // then redirect
      // console.log('THE TOKEN', token.token.user_id);
      // res.redirect(302, '/');
      const fitbitId = token.token.user_id;

      User.where({ fitbit_id: fitbitId })
        .fetch()
        .then((err, user) => {
          console.log(user);
          if (!user) {
            console.log('creating user');
            new User({ fitbit_id: fitbitId })
              .save()
              .then((saveError, savedUser) => done(saveError, savedUser));
            console.log('CREATED USER', new User({ fitbit_id: fitbitId }));
          } else {
            console.log('user already created');
          }
        })
        .then(() => {
          console.log('sending response back');
          res.status(302).redirect('/');
        });
    })
    .catch((err) => {
    // something went wrong.
      res.send(500, err);
    });
  },
};
