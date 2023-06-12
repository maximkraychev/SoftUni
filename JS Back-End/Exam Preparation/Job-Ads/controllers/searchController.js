const { isUser } = require('../middlewares/guards');
const { findProductBySearch } = require('../services/product');
const parseError = require('../utils/parsers');

const searchController = require('express').Router();

searchController.get('/', isUser(), async (req, res) => {
    try {
        const isSearched = !!req.query.search;
        const ads = isSearched ? await findProductBySearch(req.query) : [];
        res.render('search', { title: 'Search', ads: ads.myAds, isSearched });
    } catch (err) {
        res.render('search', { title: 'Search', ads: [], error: parseError(err) });
    }
});

module.exports = {
    searchController
}