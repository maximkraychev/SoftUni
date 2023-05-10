const { isUser, isOwner } = require('../middlewares/guards');
const { createCourse, deleteById, getCoursesByQuery } = require('../services/course');
const { parseError } = require('../utils/parsers');
const coursePreloader = require('../middlewares/preload');

const courseController = require('express').Router();


courseController.get('/:id/details', isUser(), coursePreloader(), async (req, res) => {
    try {
        addLocalsAdditionalsParms(req, res);
        res.render('courseDetails');
    } catch (err) {
        res.render('courseDetails', { error: parseError(err) });
    }
});

courseController.get('/:id/enroll', isUser(), coursePreloader(true), async (req, res) => {
    try {

        const [isOwner, isAlreadyEnrolled] = addLocalsAdditionalsParms(req, res);

        if (isOwner) {
            throw new Error('You are the owner of the course and cannot enroll in it!');
        }

        if (isAlreadyEnrolled) {
            throw new Error('You have already enrolled in this course!');
        }

        res.locals.course.usersEnrolled.push(req.user._id);
        res.locals.course.save();
        res.redirect(`/course/${req.params.id}/details`);
    } catch (err) {
        res.locals.course = res.locals.course.toObject();
        res.render('courseDetails', { error: parseError(err) });
    }

});

courseController.get('/:id/edit', isUser(), coursePreloader(), isOwner(), (req, res) => {
    res.render('editCourse');
});

courseController.post('/:id/edit', isUser(), coursePreloader(true), isOwner(), async (req, res) => {
    try {
        const course = res.locals.course;
        course.title = req.body.title;
        course.description = req.body.description;
        course.imageUrl = req.body.imageUrl;
        course.duration = req.body.duration;
        course.save();

        res.redirect(`/course/${course._id.toString()}/details`);
    } catch (err) {
        res.locals.course = res.locals.course.toObject();
        res.render('editCourse', { error: parseError(err) });
    }
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

courseController.get('/:id/delete', isUser(), coursePreloader(), isOwner(), async (req, res) => {
    try {
        await deleteById(req.params.id);
        res.redirect('/');
    } catch (err) {
        addLocalsAdditionalsParms(req, res);
        res.render('courseDetails', { error: parseError(err) });
    }
});


courseController.get('/search', isUser(), async (req, res) => {
    try {
        const courses = await getCoursesByQuery(req.query.search);
        res.render('userHome', { courses });
    } catch (err) {
        res.render('userHome', { error: parseError(err) });
    }

});

function addLocalsAdditionalsParms(req, res) {
    const course = res.locals.course;
    res.locals.isOwner = course.owner.toString() == req.user._id;
    res.locals.isAlreadyEnrolled = course.usersEnrolled.some(x => x.toString() == req.user._id);
    return [res.locals.isOwner, res.locals.isAlreadyEnrolled];
}

module.exports = courseController;