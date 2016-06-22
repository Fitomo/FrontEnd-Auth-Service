const session = require('express-session');
const cookieParser = require('cookie-parser');

module.exports = (app, express, passport) => {
  app.use(session({
    name: 'fitomo',
    secret: 'fitomo',
    rolling: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 60000
    }
  }));

  app.use(cookieParser());


  // app.use(function(req, res, next) {
  //   req.session.user = '';
  //   req.session.save();
  //   next();
  // });
};
