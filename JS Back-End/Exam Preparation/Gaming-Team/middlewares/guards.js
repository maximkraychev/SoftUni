function isUser() {
    return (req, res, next) => {
        if (req.user == undefined) {
            res.redirect('/auth/login');
            return;
        }
        next();
    }
}

module.exports = {
    isUser
}