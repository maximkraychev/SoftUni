const { getProductRow, getProduct } = require("../services/product");

module.exports = (boolean) => async (req, res, next) => {
    try {
        if (boolean) {
            res.locals.product = await getProductRow(req.params.id);
        } else {
            res.locals.product = await getProduct(req.params.id);
        }

        if (res.locals.product == null) {
            throw new Error('We could\'t find game with that ID');
        }
    } catch (err) {
        //TODO... Chnage the error handling!!!
        console.error(err);
        res.render('404', { title: '404 Page - Gaming Team' });
        return;
    }

    next();
}