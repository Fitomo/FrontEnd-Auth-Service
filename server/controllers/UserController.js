const User = require('../models/UserModel.js');

module.exports = {

  getCurrentUser: (req, res) => {
    var userID = JSON.stringify(req.sessionStore.sessions).split('user')[1].split(':')[1].split('}')[0];
    //console.log('current', JSON.stringify(req.sessionStore.sessions).split('user')[1].split(':')[1].split('}')[0]);
    User.where({ id : userID }).fetch()
    .then(function(currentUser) {
     // console.log('currentUSER', currentUser);
      res.status(200).send(currentUser);
    })
    .catch(function(err) {
      console.error(err);
    })
  }
};
