const { verifyToken } = require("../services/user")

module.exports = () => async (req, res, next) => {

    if (req.cookies.token) {
        try {
            const userData = await verifyToken(req.cookies.token);
            req.user = userData;
        } catch (err) {
            res.clearCookie('token');
            res.redirect('/auth/login');
            return;
        }
    }

    next();
}