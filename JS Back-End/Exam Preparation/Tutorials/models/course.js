const { Schema, model, Types} = require('mongoose');

const courseSchema = new Schema({
    title: {type: String, minlength: [4, 'Title should be at least 4 characters!']},
    description: {type: String, minlength: [20, 'Description must be more than 20 symbols!'], maxlength: [50, 'Description must be less than 50 symbols!']},
    imageUrl: {type: String, validate: [/^https?/i, 'The imageUrl should starts with http or https!']},
    duration: {type: String, require: true},
    createdAt: {type: String, require: true},
    usersEnrolled: {type: [Types.ObjectId], default: []} 
});

courseSchema.index({title: 1}, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Course = model('Course', courseSchema);
module.exports = Course;