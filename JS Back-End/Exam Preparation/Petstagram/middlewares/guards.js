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

function notOwner() {
    return (req, res, next) => {
        if(req.user && res.locals.product.owner._id.toString() !== req.user._id.toString()) {
            next();
            return;
        }
        res.redirect('/auth/login');
    }
}


module.exports = {
    isUser,
    isOwner,
    notOwner
}