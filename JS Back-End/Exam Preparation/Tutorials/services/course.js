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

module.exports = {
    createCourse,
}