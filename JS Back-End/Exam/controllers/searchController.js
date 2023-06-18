const { getAllProducts, getBySearch } = require('../services/product');
const parseError = require('../utils/parsers');

const searchController = require('express').Router();

searchController.get('/', async (req, res) => {
    try {
        if (req.query.search == undefined) {
            res.locals.products = await getAllProducts()
        } else {
            res.locals.products = await getBySearch(req.query.search);
            res.locals.noProducts = res.locals.products.length == 0;
        }

        res.render('search', { title: 'Search Page' });
    } catch (err) {
        res.render('search', {
            title: 'Search Page',
            error: parseError(err)
        })
    }
});

module.exports = searchController;