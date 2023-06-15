const { verifyToken } = require("../services/user")

module.exports = () => async (req, res, next) => {

    if (req.cookies.token) {
        try {
            const userData = await verifyToken(req.cookies.token);
            req.user = userData;
            res.locals.user = userData;
            res.locals.userId = userData._id;
        } catch (err) {
            res.clearCookie('token');
            res.redirect('/auth/login');
            return;
        }
    }

    next();
}