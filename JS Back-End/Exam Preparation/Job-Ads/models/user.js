const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[a-z]+@[a-z]+\.[a-zA]+$/i.test(value),
            message: 'Invalid email!'
        }
    },
    description: { type: String, required: true, maxLength: [40, 'The description of skills should be a maximum of 40 characters long!'] },
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