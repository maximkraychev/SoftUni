const { model, Schema, Types } = require('mongoose');


const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        validate: {
            validator: (value) => /^[a-zA-Z0-9]+$/.test(value),
            message: props => `${props.value} should only consist of english letters and digits`
        }
    },
    username: { type: String, require: true },
    hashedPassword: { type: String, require: true },
    offeredHotels: {type: [Types.ObjectId], default: []}

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