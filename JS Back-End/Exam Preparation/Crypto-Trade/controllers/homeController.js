const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {title: 'Home Page - Crypto Web'});
});


module.exports = homeController;