const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: [true, 'Username is required!'], unique: true, minLength: [5, 'The username should be at least five characters long'] },
    email: { type: String, required: [true, 'Email is required!'], unique: true, minLength: [10, 'The email should be at least ten character long'] },
    hashedPassword: { type: String, required: true },
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;