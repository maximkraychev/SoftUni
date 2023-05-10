const { createCourse, getCourseById, getCourseByIdRow } = require('../services/course');
const { parseError } = require('../utils/parsers');

const courseController = require('express').Router();


courseController.get('/:id/details', async (req, res) => {
    try {
        const course = await getCourseById(req.params.id);
        const isOwner = course.owner.toString() == req.user._id;
        const isAlreadyEnrolled = course.usersEnrolled.some(x => x.toString() == req.user._id);
        res.render('courseDetails', {
            course,
            isOwner,
            isAlreadyEnrolled
        });
    } catch (err) {
        res.render('courseDetails', { error: parseError(err) });
    }
});

courseController.get('/:id/enroll', async (req, res) => {
    try {
        const course = await getCourseByIdRow(req.params.id);
        const isOwner = course.owner.toString() == req.user._id;
        const isAlreadyEnrolled = course.usersEnrolled.some(x => x.toString() == req.user._id);

        if (isOwner) {
            throw new Error('You are the owner of the course and cannot enroll in it!');
        }

        if (isAlreadyEnrolled) {
            throw new Error('You have already enrolled in this course!');
        }

        course.usersEnrolled.push(req.user._id);
        course.save();
        res.redirect(`/course/${req.params.id}/details`);
    } catch (err) {
        res.render('courseDetails', { error: parseError(err) });
    }

});

courseController.get('/:id/edit', (req, res) => {
    res.render('editCourse');
});

courseController.get('/create', (req, res) => {
    res.render('createCourse');
});

courseController.post('/create', async (req, res) => {
    try {
        await createCourse(req.body, req.user._id);
        res.redirect('/');
    } catch (err) {
        res.render('createCourse', {
            body: req.body,
            error: parseError(err)
        })
    }
});

module.exports = courseController;