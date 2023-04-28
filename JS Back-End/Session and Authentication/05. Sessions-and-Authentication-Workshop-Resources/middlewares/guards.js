module.exports = () => (req, res, next) => {
    if (req.user == undefined) {
        res.redirect('/auth/login');
    } else {
        next();
    }
}
