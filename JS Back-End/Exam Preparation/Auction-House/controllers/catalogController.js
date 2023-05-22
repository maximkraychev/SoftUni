const catalogCotroller = require('express').Router();
const { getAllProducts } = require('../services/product');
const parseError = require('../utils/parsers');

catalogCotroller.get('/', async (req, res) => {

    try {
        const products = await getAllProducts();
        res.render('browse', {
            title: 'Browse Auctions',
            products,
            user: req.user
        });
    } catch (err) {
        res.render('browse', {
            title: 'Browse Auctions',
            error: parseError({ message: 'Something went wrong please try again later!' })
        })
    }

});

module.exports = catalogCotroller;