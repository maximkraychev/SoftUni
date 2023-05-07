const { verifyToken } = require("../services/user");

module.exports = () => (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        try {
            const userData = verifyToken(token);
            req.user = userData;
            res.locals.isUser = true
            res.locals.username = userData.username;
        } catch (err) {
            res.clearCookie('token');
            res.redirect('/auth/login');
            return;
        }
    }

    next();
};