const JawboneClient = require('../../jawbone-client-oauth2/src/client.js');
const client = new JawboneClient('OWoCNkdQw6U', '9aa9e0a20c1b7279a416537e7b13b80b5c1c7155');
const redirectUri = 'http://127.0.0.1:8080/auth/jawbone/callback';
const User = require('../models/UserModel.js');
const moment = require('moment');
const io = require('socket.io-emitter')({ host: process.env.REDIS_DB, port: 6379 });

module.exports = {
  jawboneLogin: (req, res) => {
    const scope = 'basic_read extended_read move_read sleep_read weight_read heartrate_read';
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
            user.set({
              accessToken: token.token.access_token,
              refreshToken: token.token.refresh_token,
            }).save();
            req.session.user = user.get('id');
            req.session.save();
          }
        })
        .then(() => {
          setTimeout(() => {
            io.emit('action', { type: 'LOGIN', data: 'bruh' });
          }, 800);
          res.status(302).redirect('/');
        });
    })
    .catch((err) => {
      // MORE PRECISE ERROR HANDLING?
      res.status(500).send(err);
    });
  },
};
