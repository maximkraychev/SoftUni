const catalogCotroller = require('express').Router();
const { getAllProducts } = require('../services/product');
const parseError = require('../utils/parsers');


catalogCotroller.get('/', async (req, res) => {

    try {
        const products = await getAllProducts();
        res.locals.noProducts = products.length == 0;
        res.render('catalog', {
            title: 'Dashboard Page',
            products,
            user: req.user
        });
    } catch (err) {
        console.error(err);
        res.render('catalog', {
            title: 'Dashboard Page',
            error: parseError(err)
        })
    }

});

module.exports = catalogCotroller;