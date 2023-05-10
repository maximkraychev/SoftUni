const Course = require("../models/course");
const { dateParser } = require("../utils/parsers");

async function createCourse({ title, description, imageUrl, duration }) {
    const existing = await Course.findOne({ title }).collation({ locale: 'en', strength: 2 });

    if (existing) {
        throw new Error('This title is already taken!');
    }

    return Course.create({
        title,
        description,
        imageUrl,
        duration,
        createdAt: dateParser()
    });
}

async function getAllCoursesByDate() {
    return Course.find({}).sort({ createdAt: 1 }).lean();
}

async function getThreeCoursesByEnrolledUsers() {
    return Course.find({})
        .sort({ 'usersEnrolled.length': -1 })
        .limit(3)
        .lean()
}

module.exports = {
    createCourse,
    getAllCoursesByDate,
    getThreeCoursesByEnrolledUsers
}