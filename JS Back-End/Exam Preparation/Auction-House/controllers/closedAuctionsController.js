const closedAuctionsController = require('express').Router();
const { isUser } = require('../middlewares/guards');
const { getAllClosedProductByUserId } = require('../services/product');
const parseError = require('../utils/parsers');

closedAuctionsController.get('/', isUser(), async (req, res) => {
    try {
        const products = await getAllClosedProductByUserId(req.user._id);
        console.log(products);
        res.render('closed-auctions', {
            title: 'Closed Auctions',
            products
        });
    } catch (err) {
        res.render('closed-auctions', {
            title: 'Closed Auctions',
            error: parseError(err)
        });
    }
});

module.exports = closedAuctionsController;