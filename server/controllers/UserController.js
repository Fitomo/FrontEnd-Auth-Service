const User = require('../models/UserModel.js');

module.exports = {

  getCurrentUser: (req, res) => {
    console.log('inget', req.session);
    const userID = JSON.stringify(req.sessionStore.sessions).split('user')[1].split(':')[1].split('}')[0];
    // console.log('current', JSON.stringify(req.sessionStore.sessions).split('user')[1].split(':')[1].split('}')[0]);
    User.where({ id: userID }).fetch()
    .then((currentUser) => {
      res.status(200).send(currentUser);
    })
    .catch((err) => {
      console.error(err);
    })
  },

  updateCurrentUser: (req, res) => {
    let data = req.body;
    console.log('SERVER', data);
    User.where({ id: req.body.id }).fetch()
    .then((currentUser) => {
      console.log('curr', currentUser);
      currentUser.set({
        abXp: data.abXp,
        armXp: data.armXp,
        legXp: data.legXp,
        distXp: data.distXp,
        name: data.name,
        username: data.username,
      });
      currentUser.save().then((curr) => {
        console.log('after', curr);
        res.status(200).end(JSON.stringify(curr));
      });
    })
    .catch((err) => {
      console.error(err);
    });
  },
};
