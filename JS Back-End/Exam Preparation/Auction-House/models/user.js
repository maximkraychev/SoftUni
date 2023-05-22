const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: (value) => /^[a-z]+@[a-z]+\.[a-z]+$/gi.test(value),
            message: 'The email is invalid!'
        }
    },
    firstName: { type: String, required: [true, 'First Name is required'] },
    lastName: { type: String, required: [true, 'Last Name is required'] },
    hashedPassword: { type: String, required: true },
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;