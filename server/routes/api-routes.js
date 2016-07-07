const UserController = require('./../controllers/UserController.js');
const FriendController = require('./../controllers/FriendController');
const request = require('request');
const queryString = require('query-string');

module.exports = (app) => {
  app.get('/api/user', UserController.getCurrentUser);
  app.get('/api/user/:id', UserController.refreshUserData);
  app.get('/api/all/:limit/:offset', UserController.getAllUsers);
  app.get('/api/user/:userId/stats/:device', UserController.getStats);
  app.get('/api/oneuser/:id', UserController.getOneUser);
  app.get('/api/friend/', FriendController.getFriends);

  app.get('/api/syncfitbit', (req, res) => {
    const query = queryString.stringify(req.query);
    request(`http://${process.env.DATA_AGG_SERVICE}/api/fitbit/update/?${query}`, (error, response, body) => {
      res.send(body);
    });
  });

  app.get('/api/syncjawbone', (req, res) => {
    const query = queryString.stringify(req.query);
    request(`http://${process.env.DATA_AGG_SERVICE}/api/jawbone/update/?${query}`, (error, response, body) => {
      res.send(body);
    });
  });

  app.post('/api/oneuser/:id', UserController.getOneUser);
  app.post('/api/user', UserController.updateCurrentUser);
};
