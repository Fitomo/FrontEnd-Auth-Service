const Friend = require('../models/FriendModel.js');

module.exports = {
  getFriends: (req, res) => {
    Friend.where({}).fetchAll()
    .then((friends) => {
      res.status(200).send(friends);
    })
    .catch((err) => {
      console.error(err);
    });
  },
};
