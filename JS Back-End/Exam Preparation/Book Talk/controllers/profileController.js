const { isUser } = require('../middlewares/guards');
const { findWishedProductsByUser } = require('../services/product');
const parseError = require('../utils/parsers');

const profileController = require('express').Router();

profileController.get('/', isUser(), async (req, res) => {
    try {
        const books = await findWishedProductsByUser(req.user._id);
        res.render('profile', {
            title: 'Profile Page',
            books
        });
    } catch (err) {
        res.render('profile', {
            title: 'Profile Page',
            error: parseError(err)
        });
    }

});

module.exports = profileController;