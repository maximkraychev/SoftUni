const closedAuctionsController = require('express').Router();

closedAuctionsController.get('/', (req, res) => {
    res.render('closed-auctions', {title: 'Closed Auctions'});
});

module.exports = closedAuctionsController;