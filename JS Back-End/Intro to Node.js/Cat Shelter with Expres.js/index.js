const express = require('express');
const exphbs = require('express-handlebars');
const homeController = require('./controllers/homeController');
const addController = require('./controllers/addController');
const detailsController = require('./controllers/detailsController');
const searchController = require('./controllers/searchController');

// Express setup;
const app = express();
app.listen(3000);

// Handlebars setup;
const handlebars = exphbs.create({ extname: '.hbs' });
app.engine('.hbs', handlebars.engine)
app.set('view engine', '.hbs');

// Middleware for forms;
app.use(express.urlencoded({ extended: true }));

// Middlewares for static files;
app.use('/static', express.static('static'));

app.use(['/home', '/', '/index.html'], homeController);
app.use('/cats', addController);
app.use('/details', detailsController);

