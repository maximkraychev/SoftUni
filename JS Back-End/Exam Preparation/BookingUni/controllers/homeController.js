const homeController = require('express').Router();

homeController.get('/', (req, res) => {

    res.render('home', {title: 'BookingUni'})
});

module.exports = homeController;