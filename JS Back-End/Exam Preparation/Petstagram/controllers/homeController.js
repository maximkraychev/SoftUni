const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {title: 'Petstagram'});
});


module.exports = homeController;