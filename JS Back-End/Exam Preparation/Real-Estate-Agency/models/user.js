const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        match: [/^[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+$/, 'The name should be in the following format -> (firstname lastname) - "Alexandur Petrov"']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        unique: true,
        minLength: [5, 'The username should be at least five characters long']
    },
    hashedPassword: {
        type: String,
        required: true
    },
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;