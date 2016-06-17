const AuthController = require('./../controllers/AuthController.js');
const FitbitAuthController = require('./../controllers/FitbitAuthController.js');
const JawboneAuthController = require('./../controllers/JawboneAuthController.js');

module.exports = (app) => {
  app.get('/auth/fitbit', FitbitAuthController.fitbitLogin);
  app.get('/auth/fitbit/callback', FitbitAuthController.fitbitCallback);

  app.get('/auth/jawbone', JawboneAuthController.jawboneLogin);
  app.get('/auth/jawbone/callback', JawboneAuthController.jawboneCallback);

  app.get('/',
  (req, res) => {
    res.redirect('/login');
  });

  app.get('/index',
  (req, res) => {
    res.render('index');
  });

  app.get('/login',
  (req, res) => {
    res.render('login');
  });

  app.get('/logout',
  (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/login');
  });
};
