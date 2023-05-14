function isUser() {
    return (req, res, next) => {
        if (req.user == undefined) {
            res.redirect('/auth/login');
            return;
        }
        next();
    }
}

//Must be used after preloader
function isOwner() {
    return (req, res, next) => {
        if (res.locals.game.owner.toString() != req.user._id.toString()) {
            res.redirect('/auth/login');
            return;
        }
        next();
    }
}


module.exports = {
    isUser,
    isOwner
}