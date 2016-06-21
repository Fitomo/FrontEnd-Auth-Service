const User = require('../models/UserModel.js');

module.exports = {

  getCurrentUser: (req, res) => {
    console.log('inget', req.session);
    let userID = JSON.stringify(req.sessionStore.sessions).split('user')[1].split(':')[1].split('}')[0];
    // console.log('current', JSON.stringify(req.sessionStore.sessions).split('user')[1].split(':')[1].split('}')[0]);
    User.where({ id : userID }).fetch()
    .then(function(currentUser) {
     // console.log('currentUSER', currentUser);
      res.status(200).send(currentUser);
    })
    .catch(function(err) {
      console.error(err);
    })
  },

  updateCurrentUser: (req, res) => {
    let data = req.body;
    User.where({ id: req.body.id }).fetch()
    .then(function(currentUser) {
      console.log('curr', currentUser);
      currentUser.set({
        abXp: data.abXp,
        armXp: data.armXp,
        legXp: data.legXp,
        distXp: data.distXp,
      });
      currentUser.save();
      res.status(200).end(JSON.stringify(currentUser));
    })
    .catch(function(err) {
      console.error(err);
    });
  },
};
