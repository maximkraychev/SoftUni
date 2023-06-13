const catalogCotroller = require('express').Router();
const { getAllProducts } = require('../services/product');
const parseError = require('../utils/parsers');

catalogCotroller.get('/', async (req, res) => {

    try {
        const products = await getAllProducts();
        res.render('catalog', {
            products
        });
    } catch (err) {
        console.error(err);
        res.render('catalog', {
            error: parseError({ message: 'Something went wrong please try again later!' })
        })
    }

});

module.exports = catalogCotroller;