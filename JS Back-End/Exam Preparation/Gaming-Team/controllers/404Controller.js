const notFoundController = require('express').Router();

notFoundController.get('/', (req, res) => {
    res.render('404', {title: '404 Page - Gaming Team'});
});

module.exports = notFoundController;