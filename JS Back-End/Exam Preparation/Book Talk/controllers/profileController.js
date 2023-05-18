const profileController = require('express').Router();

profileController.get('/', (req, res) => {
    res.render('profile', {title: 'Profile Page'});
});

module.exports = profileController;