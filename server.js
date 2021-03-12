require('dotenv').config();
const express = require('express');
const http = require('http');
const reload = require('reload');

// Routes
const homeRouter = require('./routes/home');

const app = express();
const server = http.createServer(app);

app.set('port', process.env.PORT || 3004);
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use('/', homeRouter);
app.use('/', (req, res, next) => {
  res.status(404).render('404');
});

server.listen(app.get('port'), () => {
  console.log(`app listening http://localhost:${app.get('port')}`);
});
reload(app);
