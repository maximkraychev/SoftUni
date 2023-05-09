const { createCourse } = require('../services/course');
const { parseError } = require('../utils/parsers');

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

courseController.post('/create', async (req, res) => {
    try {
        await createCourse(req.body);
        res.redirect('/');
    } catch (err) {
        res.render('createCourse', {
            body: req.body,
            error: parseError(err)
        })
    }
});

module.exports = courseController;