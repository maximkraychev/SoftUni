const { getGameRow, getGame } = require("../services/game");

module.exports = (boolean) => async (req, res, next) => {
    try {
        if (boolean) {
            res.locals.game = await getGameRow(req.params.id);
        } else {
            res.locals.game = await getGame(req.params.id);
        }
        
        res.locals.isOwner = res.locals.game.owner.toString() == req.user._id.toString();
    } catch (err) {
        console.log(err);
        //TODO.. Handle the error;
        return;
    }

    next();
}