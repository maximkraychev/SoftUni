const express = require('express');
const exphbs  = require('express-handlebars');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');
const defaultTitle = require('../middlewares/defaultTitle');
const nav = require('../middlewares/nav');

const jwsSecret = process.env.JWT_SALT || 'bfde67512f675d12fc7218';

module.exports = (app) => {

    // Setup the view engine
    const handlebars = exphbs.create({ extname: '.hbs' });
    app.engine('.hbs', handlebars.engine)
    app.set('view engine', '.hbs');

    // Setup the body parser
    app.use(express.urlencoded({ extended: false }));

    // Setup the static files
    app.use('/static', express.static('static'));

    // Setup cooki parser
    app.use(cookieParser());

    // Setup auth with JSON Web Token
    app.use(auth(jwsSecret));

    // Setup navigation middleware
    app.use(nav());
    
    // Setup defaultTitle
    app.use(defaultTitle('Cubicle'));
};