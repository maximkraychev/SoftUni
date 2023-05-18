const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    //TODO... Add or remove properties
    username: { type: String, require: true, unique: true, minLength: [4, 'The username should be at least four characters long'] },
    email: { type: String, require: true, unique: true, minLength: [10, 'The email should be at least ten character long'] },
    hashedPassword: { type: String, require: true },
});

//TODO... add ore removed indexs
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