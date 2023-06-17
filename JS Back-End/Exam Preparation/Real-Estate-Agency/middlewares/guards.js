function isUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
            return;
        }
        res.redirect('/auth/login');
    }
}

//Must be used after preloader
function isOwner() {
    return (req, res, next) => {
        //TODO change owner with the property that is used to save ownerId in product
        if (res.locals.product.owner.toString() == req.user._id.toString()) {
            next();
            return;
        }
        res.redirect('/auth/login');
    }
}


module.exports = {
    isUser,
    isOwner
}