const catalogCotroller = require('express').Router();
const { getAllProducts } = require('../services/product');
const parseError = require('../utils/parsers');

catalogCotroller.get('/', async (req, res) => {
    try {
        const products = await getAllProducts();
        res.render('catalog', {
            title: 'Catalog',
            products
        });
    } catch (err) {
        res.render('catalog', {
            title: 'Catalog',
            error: parseError(err)
        })
    }

});

module.exports = catalogCotroller;