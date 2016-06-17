const passport = require('passport');

module.exports = {
  fitbitLogin: () => {
    passport.authenticate('fitbit', {
      scope: ['activity', 'heartrate', 'location', 'profile'],
    });
  },

  fitbitCallback: () => {
    passport.authenticate('fitbit', {
      successRedirect: '/',
      failureRedirect: '/login',
    });
  },

  jawboneLogin: () => {
    passport.authorize('jawbone', {
      scope: 'move_read',
    });
  },

  jawboneCallback: () => {
    passport.authorize('jawbone', {
      scope: ['move_read'],
      failureRedirect: '/login',
    }, (req, res) => {
      res.redirect('/');
    });
  },
};
