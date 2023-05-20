const express = require('express');
const { returnSelectedIfEqual } = require('../utils/customHelpers');
const cookieParser = require('cookie-parser');
const bodyTrimmer = require('../middlewares/bodyTrimmer');
const session = require('../middlewares/session');

const hbs = require('express-handlebars').create({
    extname: 'hbs',
    helpers: {
        returnSelectedIfEqual: returnSelectedIfEqual
    }
});

module.exports = (app) => {

    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
    app.use(express.urlencoded({extended: true}));
    app.use('/static', express.static('static'));
    app.use(cookieParser());
    app.use(session());
    app.use(bodyTrimmer());
};