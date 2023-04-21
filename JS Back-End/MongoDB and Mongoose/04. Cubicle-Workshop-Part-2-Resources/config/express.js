const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

module.exports = (app) => {

    // Setup the view engine
    const handlebars = exphbs.create({ extname: '.hbs' });
    app.engine('.hbs', handlebars.engine)
    app.set('view engine', '.hbs');

    // Setup the body parser
    app.use(bodyParser.urlencoded({ extended: false }));

    // Setup the static files
    app.use('/static', express.static('static'));

};