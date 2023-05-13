const catalogCotroller = require('express').Router();
const { getAllGames } = require('../services/game');
const parseError = require('../utils/parsers');


catalogCotroller.get('/', async (req, res) => {

    try {
        const games = await getAllGames();
        res.render('catalog', {
            title: 'Catalog Page - Gaming Team',
            games,
            user: req.user
        });
    } catch (err) {
        console.log(err);
        res.render('catalog', {
            title: 'Catalog Page - Gaming Team',
            error: parseError({ message: 'Something went wrong please try again later!' })
        })
    }

});

module.exports = catalogCotroller;