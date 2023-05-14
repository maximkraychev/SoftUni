const { getAllGames, findGameBySearch } = require('../services/game');

const searchController = require('express').Router();

searchController.get('/', async (req, res) => {
    try {
        const games = await getAllGames();
        res.render('search', {
            title: 'Search - Gaming Team',
            games
        });
    } catch (err) {
        console.error(err);
        res.redirect('/search');
    }
});

searchController.post('/', async (req, res) => {
    try {
        const games = await findGameBySearch(req.body);
        const body = req.body;
        body[req.body.platform.toLowerCase()] = true;
        res.render('search', {
            title: 'Search - Gaming Team',
            games,
            body
        });
    } catch (err) {
        console.error(err);
        res.redirect('/search');
    }
});

module.exports = searchController;