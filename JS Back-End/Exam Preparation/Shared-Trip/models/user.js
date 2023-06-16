const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/.test(value),
            message: 'Email is invalid!'
        }
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female'],
            message: '{VALUE} is invalid!'
        },
        required: [true, 'Gender is required!']
    },
    hashedPassword: { type: String, required: true },
    tripsHistory: { type: [Types.ObjectId], ref: 'Product', default: [] }
});

userSchema.index({ email: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;