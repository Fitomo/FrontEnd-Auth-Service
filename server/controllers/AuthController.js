const passport = require('passport');

module.exports = {
  fitbitLogin: () => {
    console.log('logging into fitbit');
    passport.authenticate('fitbit', {
      scope: ['activity', 'heartrate', 'location', 'profile', 'sleep', 'social'],
    });
  },

  fitbitCallback: () => {
    console.log('fitbit callback');
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
