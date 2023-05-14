const gameController = require('express').Router();
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

gameController.get('/details/:id', preloader(), async (req, res) => {
    userStates(req, res);
    res.render('details', { title: 'Details Page', });
});

gameController.get('/details/:id/buy', preloader(true), async (req, res) => {
    res.locals.game.boughtBy
        .push(req.user._id)

    await res.locals.game.save();
    userStates(req, res);
    res.locals.game = res.locals.game.toObject();
    res.render('details', { title: 'Details Page', });
});

function userStates(req, res) {
    res.locals.isOwner = res.locals.game.owner.toString() == req.user._id.toString();
    res.locals.isAlredyBought = res.locals.game.boughtBy.some(x => x.toString() == req.user._id.toString());
}

module.exports = gameController;