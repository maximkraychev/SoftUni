const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {title: 'Home Page - Gaming Team'});
});


module.exports = homeController;