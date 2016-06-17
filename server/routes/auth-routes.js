const AuthController = require('./../controllers/AuthController.js');

module.exports = (app) => {
  app.get('/auth/fitbit', AuthController.fitbitLogin);
  app.get('/auth/fitbit/callback', AuthController.fitbitCallback);

  app.get('/auth/jawbone', AuthController.jawboneLogin);
  app.get('/auth/jawbone/callback', AuthController.jawboneCallback);

  app.get('/',
  (req, res) => {
    res.redirect('/login');
  });
};
