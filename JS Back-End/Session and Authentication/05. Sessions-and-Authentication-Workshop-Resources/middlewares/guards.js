module.exports = () => (req, res, next) => {
    if (req.cookies.jwt == undefined) {
        res.redirect('/auth/login');
    } else {
        next();
    }
}
