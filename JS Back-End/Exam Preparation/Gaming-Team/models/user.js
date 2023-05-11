const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, require: true, minLength: [5, 'The username should be at least five characters long'] },
    email: { type: String, require: true, minLength: [10, 'The email should be at least ten character long'] },
    hashedPassword: { type: String, require: true },
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

userSchema.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;