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
        if (res.locals.product.owner._id.toString() == req.user._id.toString()) {
            next();
            return;
        }
        res.redirect('/auth/login');
    }
}

function isGuest() {
    return (req, res, next) => {
        if (req.user) {
            res.clearCookie('token');
            return res.redirect('/');
        }
        next();
    }
}

module.exports = {
    isUser,
    isOwner,
    isGuest
}