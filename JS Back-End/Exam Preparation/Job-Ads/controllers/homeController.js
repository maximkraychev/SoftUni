const homeController = require('express').Router();
homeController.get('/', (req, res) => {
    res.render('home', {title: 'Home Page'});
});


module.exports = homeController;