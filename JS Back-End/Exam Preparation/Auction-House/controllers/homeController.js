const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {title: 'Auction House'});
});


module.exports = homeController;