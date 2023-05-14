const { getGameRow, getGame } = require("../services/game");

module.exports = (boolean) => async (req, res, next) => {
    try {
        if (boolean) {
            res.locals.game = await getGameRow(req.params.id);
        } else {
            res.locals.game = await getGame(req.params.id);
        }

        if (res.locals.game == null) {
            throw new Error('We could\'t find game with that ID');
        }
    } catch (err) {
        console.error(err);
        res.render('404', { title: '404 Page - Gaming Team' });
        return;
    }

    next();
}