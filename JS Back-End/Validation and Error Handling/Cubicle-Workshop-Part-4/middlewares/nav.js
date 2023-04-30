module.exports = () => (req, res, next) => {
    if (req.cookies.jwt != undefined) {
        res.locals.isUser = true;
        res.locals.username = req.user.username
    }
    next();
};