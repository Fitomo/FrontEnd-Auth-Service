const User = require('../models/UserModel.js');

module.exports = {

  getCurrentUser: (req, res) => {
    User.where({ fitbit_id : 123 }).fetch()
    .then(function(currentUser) {
      console.log('currentUSER', currentUser);
      res.status(200).send(currentUser);
    })
    .catch(function(err) {
      console.error(err);
    })
  }
};
