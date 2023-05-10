const { isUser } = require('../middlewares/guards');
const { createCourse, getCourseById, getCourseByIdRow } = require('../services/course');
const { parseError } = require('../utils/parsers');
const coursePreloader = require('../middlewares/preload');

const courseController = require('express').Router();


courseController.get('/:id/details', isUser(), coursePreloader(), async (req, res) => {
    try {
        const course = res.locals.course;
        const isOwner = course.owner.toString() == req.user._id;
        const isAlreadyEnrolled = course.usersEnrolled.some(x => x.toString() == req.user._id);
        res.render('courseDetails', {
            isOwner,
            isAlreadyEnrolled
        });
    } catch (err) {
        res.render('courseDetails', { error: parseError(err) });
    }
});

courseController.get('/:id/enroll', isUser(), coursePreloader(true), async (req, res) => {
    try {
        const course = res.locals.course
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

courseController.get('/create', isUser(), (req, res) => {
    res.render('createCourse');
});

courseController.post('/create', isUser(), async (req, res) => {
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