const FitbitAuthController = require('./../controllers/FitbitAuthController.js');
const JawboneAuthController = require('./../controllers/JawboneAuthController.js');

module.exports = (app) => {
  app.get('/auth/fitbit', FitbitAuthController.fitbitLogin);
  app.get('/auth/fitbit/callback', FitbitAuthController.fitbitCallback);
  app.get('/auth/jawbone', JawboneAuthController.jawboneLogin);
  app.get('/auth/jawbone/callback', JawboneAuthController.jawboneCallback);
};
