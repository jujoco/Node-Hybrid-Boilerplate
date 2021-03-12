exports.home = (req, res) => {
  res.render('index', { title: 'Home Page' });
};

exports.about = (req, res) => {
  res.render('index', { title: 'About Page' });
};
