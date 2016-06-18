module.exports = (app, express) => {

  app.get('/login',
  (req, res) => {
    res.render('login');
  });
};
