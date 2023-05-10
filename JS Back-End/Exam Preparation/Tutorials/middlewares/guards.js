function isUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    }
}

function isOwner() {
    //Should be used after the coursePreloader;

    return (req, res, next) => {
        if (res.locals.course && res.locals.course.owner.toString() == req.user._id) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    }
}


module.exports = {
    isUser,
    isOwner
}