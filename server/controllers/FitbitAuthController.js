const FitbitClient = require('fitbit-client-oauth2');
const client = new FitbitClient('227V3M', 'fde5c9f2a90368d2bc20b4a5d60dd76c');
const redirectUri = 'http://127.0.0.1:8080/auth/fitbit/callback';
const User = require('../models/UserModel.js');

module.exports = {
  fitbitLogin: (req, res) => {
    const scope = ['activity', 'nutrition', 'profile', 'settings', 'sleep', 'social', 'weight'];
    const authorizationUri = client.getAuthorizationUrl(redirectUri, scope);
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
          if (!user) {
            new User({ fitbit_id: fitbitId })
              .save()
              .then((saveError, savedUser) => done(saveError, savedUser));
          }
        })
        .then(() => {
          res.status(302).redirect('/index');
        });
    })
    .catch((err) => {
      // MORE PRECISE ERROR HANDLING?
      res.status(500).send(err);
    });
  },
};
