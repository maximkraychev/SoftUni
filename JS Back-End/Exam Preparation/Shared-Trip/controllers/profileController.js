const { isUser } = require('../middlewares/guards');
const { getUserById } = require('../services/user');
const parseError = require('../utils/parsers');

const profileController = require('express').Router();

profileController.get('/', isUser(), async (req, res) => {
    try {
        const user = await getUserById(req.user._id);
        user.tripsNumber = user.tripsHistory.length;
        res.render('profile', {
            title: 'Profile Page',
            user
        });
    } catch (err) {
        res.render('404', { title: 'Page Not Found', error: parseError(err) });
    }
});


module.exports = profileController;