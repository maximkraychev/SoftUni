const gameController = require('express').Router();
const { isOwner, isUser } = require('../middlewares/guards');
const preloader = require('../middlewares/preloader');
const { createGame, deleteGame } = require('../services/game');
const parseError = require('../utils/parsers');

//Create
gameController.get('/create', isUser(), async (req, res) => {
    res.render('create', { title: 'Create Page - Gaming Team' });
});

gameController.post('/create', isUser(), async (req, res) => {
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

//Details
gameController.get('/details/:id', preloader(), async (req, res) => {
    const isGuest = req.user == undefined;
    if (isGuest == false) {
        userStates(req, res);
    }
    res.render('details', { title: 'Details Page', isGuest});
});

//Buy
gameController.get('/details/:id/buy', isUser(), preloader(true), async (req, res) => {
    res.locals.game.boughtBy
        .push(req.user._id)

    await res.locals.game.save();
    userStates(req, res);
    res.locals.game = res.locals.game.toObject();
    res.render('details', { title: 'Details Page', });
});

//Delete
gameController.get('/details/:id/delete', isUser(), preloader(), isOwner(), async (req, res) => {
    try {
        await deleteGame(req.params.id);
        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        res.redirect(`/details/${req.params.id}`);
    }
});

//Edit
gameController.get('/details/:id/edit', isUser(), preloader(), isOwner(), (req, res) => {
    res.locals.game[res.locals.game.platform.toLowerCase()] = true;
    res.render('edit', {
        title: 'Edit Page - Gaming Team',
        body: res.locals.game

    })
});

gameController.post('/details/:id/edit', isUser(), preloader(true), isOwner(), async (req, res) => {
    try {
        const game = res.locals.game;
        game.name = req.body.name
        game.image = req.body.image
        game.price = Number(req.body.price)
        game.description = req.body.description
        game.genre = req.body.genre
        game.platform = req.body.platform
        await game.save();
        res.redirect(`/game/details/${req.params.id}`);
    } catch (err) {
        res.locals.game = res.locals.game.toObject();
        res.locals.game[res.locals.game.platform.toLowerCase()] = true;
        res.render('edit', {
            title: 'Edit Page - Gaming Team',
            body: res.locals.game,
            error: parseError(err)
        });
    }
});

// User State
function userStates(req, res) {
    res.locals.isOwner = res.locals.game.owner.toString() == req.user._id.toString();
    res.locals.isAlredyBought = res.locals.game.boughtBy.some(x => x.toString() == req.user._id.toString());
}

module.exports = gameController;