const JawboneClient = require('../../jawbone-oauth2/src/client.js');
const client = new JawboneClient('OWoCNkdQw6U', '9aa9e0a20c1b7279a416537e7b13b80b5c1c7155');
const redirectUri = 'http://127.0.0.1:8080/auth/jawbone/callback';
const User = require('../models/UserModel.js');


module.exports = {
  jawboneLogin: (req, res) => {
    const scope = ['basic_read'];
    const authorizationUri = client.getAuthorizationUrl(redirectUri, scope);
    res.redirect(authorizationUri);
  },

  jawboneCallback: (req, res, done) => {
    const code = req.query.code;
    client.getToken(code, redirectUri)
    .then((token) => {
      const jawboneId = token.data.xid;
      User.where({ jawbone_id: jawboneId })
        .fetch()
        .then(user => {
          if (!user) {
            const newUser = new User({
              device: 'Jawbone',
              jawbone_id: jawboneId,
            });
            newUser.save()
              .then((saveError, savedUser) => {
                req.session.user = newUser.get('id');
                done(saveError, savedUser);
              });
          } else {
            req.session.user = user.get('id');
          }
        })
        .then(() => {
          res.status(302).redirect('/');
        });
    })
    .catch((err) => {
      // MORE PRECISE ERROR HANDLING?
      res.status(500).send(err);
    });
  },
};
