const searchController = require('express').Router();
const { getBySearch } = require('../services/product');
const parseError = require('../utils/parsers');

searchController.get('/', async (req, res) => {
    try {
        if (req.query.search != undefined) {
            res.locals.searched = true;
            res.locals.products = await getBySearch(req.query.search);
        }

        res.render('search', { title: 'Search Page' })
    } catch (err) {
        res.render('search', { 
            title: 'Search Page',
            error: parseError(err) 
        })
    }
});

module.exports = searchController;