function stopAccesToClosedOffers() {
    return (req, res, next) => {
        if (res.locals.product.closed == true) {
            res.render('404', { title: 'Page Not Found' });
            return;
        }
        next();
    }
}

module.exports = stopAccesToClosedOffers;