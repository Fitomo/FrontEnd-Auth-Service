const User = require('../models/UserModel.js');

module.exports = {
  getCurrentUser: (req, res) => {
    console.log('THEREQ', req.sessionStore.sessions);
    console.log('asdf', req.session);
    const sessions = JSON.stringify(req.sessionStore.sessions);
    const userIndex = sessions.lastIndexOf('user');
    const userID = sessions.substring(userIndex + 7, userIndex + 8);

    User.where({ id: userID }).fetch()
    .then((currentUser) => {
      res.status(200).send(currentUser);
    })
    .catch((err) => {
      console.error(err);
    });
  },
  getAllUsers: (req, res) => {
    const offset = Number(req.params.offset);
    const limit = Number(req.params.limit);
    User.fetchAll()
    .then((users) => {
      users = users.toJSON().sort((a, b) => {
        if (a.totalXp < b.totalXp) {
          return 1;
        } else if (a.totalXp > b.totalXp) {
          return -1;
        }
        return 0;
      });

      res.status(200).send([users.slice(offset, offset + limit), users.length]);
    })
    .catch((err) => {
      console.error(err);
    });
  },
  getOneUser: (req, res) => {
    User.where({ id: req.path.split('/')[3] }).fetch()
    .then((currentUser) => {
      res.status(200).end(JSON.stringify(currentUser));
    })
    .catch((err) => {
      console.error(err);
    });
  },
  refreshUserData: (req, res) => {
    User.where({ id: req.path.split('/')[3] }).fetch()
    .then((currentUser) => {
      res.status(200).send(currentUser);
    })
    .catch((err) => {
      console.error('err',err);
    });
  },

  updateCurrentUser: (req, res) => {
    let data = req.body;
   // console.log('SERVER', data);
    User.where({ id: req.body.id }).fetch()
    .then((currentUser) => {
      currentUser.set({
        abXp: data.abXp,
        armXp: data.armXp,
        legXp: data.legXp,
        distXp: data.distXp,
        totalXp: data.totalXp,
        name: data.name,
        username: data.username,
        date: data.date,
        level: data.level,
        health: data.health,
        steps: data.steps,
        calories: data.calories,
      });
      currentUser.save().then((curr) => {
        res.status(200).end(JSON.stringify(curr));
      });
    })
    .catch((err) => {
      console.error(err);
    });
  },
};
