const { getProductRow, getProduct } = require("../services/product");

module.exports = (boolean) => async (req, res, next) => {
    try {
        if (boolean) {
            res.locals.product = await getProductRow(req.params.id);
        } else {
            res.locals.product = await getProduct(req.params.id);
        }

        if (res.locals.product == null) {
            throw new Error('We could\'t find product with that ID');
        }
    } catch (err) {
        res.render('404', { title: 'Not Found Page' });
        return;
    }

    next();
}