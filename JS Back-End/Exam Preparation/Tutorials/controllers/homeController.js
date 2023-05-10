const { getAllCoursesByDate, getThreeCoursesByEnrolledUsers } = require('../services/course');
const { parseError } = require('../utils/parsers');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    const template = req.user ? 'userHome' : 'guestHome';
    let courses;

    try {
        if (template == 'userHome') {
            courses = await getAllCoursesByDate();
        } else {
            courses = await getThreeCoursesByEnrolledUsers();
            courses.forEach(x => x.usersEnrolled = x.usersEnrolled.length);
        }

        res.render(template, {
            courses
        });
    } catch (err) {
        res.render(template, {
            error: parseError(err)
        });
    }

});

module.exports = homeController;