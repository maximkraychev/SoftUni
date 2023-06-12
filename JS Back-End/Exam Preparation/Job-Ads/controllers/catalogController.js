const catalogCotroller = require('express').Router();
const { getAllProducts } = require('../services/product');
const parseError = require('../utils/parsers');

//TODO... Chnage: (Path), (Name of the Template), (Title)
catalogCotroller.get('/', async (req, res) => {

    try {
        const products = await getAllProducts();
        res.render('catalog', {
            title: 'All-Ads Page',
            products,
            user: req.user
        });
    } catch (err) {
        //TODO Some logic for error case!!!
        console.error(err);
        // res.render('catalog', {
        //     title: 'Catalog Page - Gaming Team',
        //     error: parseError({ message: 'Something went wrong please try again later!' })
        // })
    }

});

module.exports = catalogCotroller;