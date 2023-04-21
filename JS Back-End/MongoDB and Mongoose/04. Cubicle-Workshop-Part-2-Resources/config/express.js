const express = require('express');
const exphbs  = require('express-handlebars');
const defaultTitle = require('../middlewares/defaultTitle');

module.exports = (app) => {

    // Setup the view engine
    const handlebars = exphbs.create({ extname: '.hbs' });
    app.engine('.hbs', handlebars.engine)
    app.set('view engine', '.hbs');

    // Setup the body parser
    app.use(express.urlencoded({ extended: false }));

    // Setup defaultTitle
    app.use(defaultTitle('Cubicle'));

    // Setup the static files
    app.use('/static', express.static('static'));

};