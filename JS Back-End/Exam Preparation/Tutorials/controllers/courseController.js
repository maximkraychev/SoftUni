const courseController = require('express').Router();


courseController.get('/:id/details', (req, res) => {

    res.render('courseDetails');
});

courseController.get('/:id/edit', (req, res) => {

    res.render('editCourse');
});

courseController.get('/create', (req, res) => {

    res.render('createCourse');
});

module.exports = courseController;