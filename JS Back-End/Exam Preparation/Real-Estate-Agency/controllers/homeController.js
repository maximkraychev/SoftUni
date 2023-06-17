const { getLastThreeAdded } = require('../services/product');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    try {
    res.locals.products = await getLastThreeAdded();
    res.render('home', {title: 'Home Page'});
    } catch (err) {

    }
});


module.exports = homeController;