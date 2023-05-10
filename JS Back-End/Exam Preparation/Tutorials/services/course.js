const Course = require("../models/course");
const { dateParser } = require("../utils/parsers");

async function createCourse({ title, description, imageUrl, duration }, owner) {
    const existing = await Course.findOne({ title }).collation({ locale: 'en', strength: 2 });

    if (existing) {
        throw new Error('This title is already taken!');
    }

    return Course.create({
        title,
        description,
        imageUrl,
        duration,
        createdAt: dateParser(),
        owner
    });
}

async function getAllCoursesByDate() {
    return Course.find({}, 'title imageUrl createdAt').sort({ createdAt: 1 }).lean();
}

async function getThreeCoursesByEnrolledUsers() {
    return Course.find({}, 'title imageUrl usersEnrolled')
        .sort({ 'usersEnrolled': -1 })
        .limit(3)
        .lean()
}

async function getCourseById(id) {
    return Course.findById(id).lean();
}

async function getCourseByIdRow(id) {
    return Course.findById(id);
}


module.exports = {
    createCourse,
    getAllCoursesByDate,
    getThreeCoursesByEnrolledUsers,
    getCourseById,
    getCourseByIdRow,
}