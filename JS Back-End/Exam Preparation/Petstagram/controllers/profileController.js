const { isUser } = require('../middlewares/guards');
const { getUserByIdPopulated } = require('../services/user');
const parseError = require('../utils/parsers');
const profileController = require('express').Router();

profileController.get('/:id', isUser(), async (req, res) => {

    try {
        const user = await getUserByIdPopulated(req.params.id)
        res.render('profile', {
            username: user.username,
            email: user.email,
            photoNumber: user.uploadedPhoto.length,
            userPhotos: user.uploadedPhoto
        });
    } catch (err) {
        res.render('profile', {
            username: req.user.username,
            email: req.user.email,
            error: parseError(err)
        })
    }
});

module.exports = profileController;