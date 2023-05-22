const express = require('express');
const hbs = require('express-handlebars').create({
    extname: 'hbs',
    helpers: {
        isContain: (a, b) => new RegExp(a, 'i').test(b)
    }
});
const cookieParser = require('cookie-parser');
const bodyTrimmer = require('../middlewares/bodyTrimmer');
const session = require('../middlewares/session');

module.exports = (app) => {

    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(cookieParser());
    app.use(session());
    app.use(bodyTrimmer());
};