const { model, Schema, Types } = require('mongoose');


const userSchema = new Schema({
    email: { type: String, require: true, },
    username: { type: String, require: true },
    hashedPassword: { type: String, require: true },
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
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