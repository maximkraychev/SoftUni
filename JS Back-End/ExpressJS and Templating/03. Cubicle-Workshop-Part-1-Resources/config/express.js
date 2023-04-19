const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');

module.exports = (app) => {

    //TODO: Setup the view engine
    const handlebars = exphbs.create({ extname: '.hbs' });
    app.engine('.hbs', handlebars.engine)
    app.set('view engine', '.hbs');

    //TODO: Setup the body parser
    app.use(bodyParser.urlencoded({ extended: false }));

    //TODO: Setup the static files
    app.use('/static', express.static('static'));

};