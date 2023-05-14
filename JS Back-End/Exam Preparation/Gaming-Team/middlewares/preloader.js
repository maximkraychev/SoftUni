const { getGameRow, getGame } = require("../services/game");

module.exports = (boolean) => async (req, res, next) => {
    try {
        if (boolean) {
            res.locals.game = await getGameRow(req.params.id);
        } else {
            res.locals.game = await getGame(req.params.id);
        }
    } catch (err) {
        console.log(err);
        //TODO.. Handle the error;
        return;
    }

    next();
}