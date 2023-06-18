const homeController = require('express').Router();
const { getLastThreeAdded } = require('../services/product');

homeController.get('/', async (req, res) => {
    res.locals.products = await getLastThreeAdded();
    res.render('home', {title: 'Home Page'});
});


module.exports = homeController;