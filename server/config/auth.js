const session = require('express-session');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
  app.use(session({
    name: 'fitomo',
    secret: 'fitomo',
    rolling: true,
    saveUninitialized: false,
    resave: true,
    cookie: {
      maxAge: 60000,
    },
  }));

  app.use(cookieParser());
};
