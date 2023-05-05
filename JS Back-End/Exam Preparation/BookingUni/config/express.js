const express = require('express');
const defaultTitle = require('../middlewares/defaultTitle');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});
const cookieParser = require('cookie-parser');
const session = require('../middlewares/session');

module.exports = (app) => {
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(cookieParser());
    app.use(session());
    app.use(defaultTitle('BookingUni'));
}