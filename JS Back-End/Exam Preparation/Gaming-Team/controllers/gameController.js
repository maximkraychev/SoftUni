const gameController = require('express').Router();
const { isUser } = require('../middlewares/guards');
const preloader = require('../middlewares/preloader');
const { createGame } = require('../services/game');
const parseError = require('../utils/parsers');


gameController.get('/create', async (req, res) => {
    res.render('create', { title: 'Create Page - Gaming Team' });
});

gameController.post('/create', async (req, res) => {
    try {
        await createGame(req.body, req.user._id);
        res.redirect('/catalog');
    } catch (err) {
        res.render('create', {
            title: 'Create Page - Gaming Team',
            error: parseError(err)
        });
    }
});

gameController.get('/details/:id', isUser(), preloader(), async (req, res) => {
    res.render('details', { title: 'Details Page' });
});


module.exports = gameController;