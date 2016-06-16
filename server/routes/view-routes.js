module.exports = (app, express) => {

  app.get('/',
  (req, res) => {
    res.render('index');
  });

};
