const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, unique: true, minLength: [2, 'The username should be at least two characters long'] },
    email: { type: String, unique: true, minLength: [10, 'The email should be at least ten character long'] },
    hashedPassword: { type: String, required: true },
    uploadedPhoto: {type: [Types.ObjectId], ref: 'Product', default: []}
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