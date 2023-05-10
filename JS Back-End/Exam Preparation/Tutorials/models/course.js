const { Schema, model, Types } = require('mongoose');

const courseSchema = new Schema({
    title: { type: String, require: true, minlength: [4, 'Title should be at least 4 characters!'] },
    description: { type: String, require: true, minlength: [20, 'Description must be more than 20 symbols!'], maxlength: [50, 'Description must be less than 50 symbols!'] },
    imageUrl: { type: String, require: true, validate: [/^https?/i, 'The imageUrl should starts with http or https!'] },
    duration: { type: String, require: true, minlength: [1, 'Duration is required!'] },
    createdAt: { type: String, require: true },
    usersEnrolled: { type: [Types.ObjectId], default: [] },
    owner: { type: Types.ObjectId, require: true }
});

courseSchema.index({ title: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Course = model('Course', courseSchema);
module.exports = Course;