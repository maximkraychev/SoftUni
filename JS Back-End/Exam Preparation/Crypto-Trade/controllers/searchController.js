const { getAllProducts, findProductBySearch } = require('../services/product');
const parseError = require('../utils/parsers');

const searchController = require('express').Router();

searchController.get('/', async (req, res) => {
    try {
        const products = await getAllProducts();
        res.render('search', {
            title: 'Search',
            products
        });
    } catch (err) {
        res.render('search', {
            title: 'Search',
            error: parseError(err)
        });
    }
});

searchController.post('/', async (req, res) => {
    try {
        const products = await findProductBySearch(req.body);
        res.render('search', {
            title: 'Search',
            products,
            body: req.body
        })
    } catch (err) {
        res.render('search', {
            title: 'Search',
            error: parseError(err)
        });
    }
});


module.exports = searchController;