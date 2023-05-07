
function isUser() {
    return (req, res, next) => {
        if (req.user == undefined) {
            return res.redirect('/auth/login');
        } else {
            next();
        }
    }
}

function isOwner() {
    return (req, res, next) => {
        console.log(req.user);
        console.log(res.locals);
        if (req.user && res.locals.hotel && req.user._id.toString() == res.locals.hotel.owner.toString()) {
            next();
        } else {
            res.redirect('/auth/login')
        }
    }
}

module.exports = {
    isUser,
    isOwner
}