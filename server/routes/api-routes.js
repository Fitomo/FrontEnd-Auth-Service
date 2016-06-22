// var Controller = require(./../controllers/***)
const UserController = require('./../controllers/UserController.js');
const FriendController = require('./../controllers/FriendController');

module.exports = (app) => {
  app.get('/api/user', UserController.getCurrentUser);
  app.get('/api/friend/', FriendController.getFriends);
  app.post('/api/user', UserController.updateCurrentUser);
};
