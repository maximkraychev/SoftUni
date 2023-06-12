const { findFirstThree } = require('../services/product');
const parseError = require('../utils/parsers');

const homeController = require('express').Router();
homeController.get('/', async (req, res) => {
    try {
        const ads = await findFirstThree();
        ads.forEach(x => x.candidates = x.usersApplied.length);
        res.render('home', { title: 'Home Page', ads });
    } catch (err) {
        res.render('home', { title: 'Home Page', ads: [] , error: parseError(err)});
    }
});


module.exports = homeController;