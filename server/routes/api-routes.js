// var Controller = require(./../controllers/***)
const UserController = require('./../controllers/UserController.js');

module.exports = (app) => {

  app.get('/api/user', UserController.getCurrentUser);
  app.post('/api/user', UserController.updateCurrentUser);
};
