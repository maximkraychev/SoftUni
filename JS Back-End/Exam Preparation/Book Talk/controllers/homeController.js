const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {title: 'Book Store'});
});


module.exports = homeController;