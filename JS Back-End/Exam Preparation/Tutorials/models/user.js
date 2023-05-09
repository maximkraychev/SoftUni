const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        minlength: [5, 'The username should be at least 5 characters long!'],
        validate: [/^[a-zA-Z0-9]+$/i, 'The username should consist only english letters and digits!']
    },
    hashedPassword: { type: String, require: true }
});

userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);
module.exports = User;