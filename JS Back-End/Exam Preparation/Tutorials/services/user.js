const User = require("../models/User");
const bcrypt = require('bcrypt')

async function register({ username, password, rePassword }) {

    const existing = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existing) {
        throw new Error('This username is already taken!');
    }

    if (/^[a-zA-Z0-9]+$/i.test(password) == false) {
        throw new Error('The password should consist only english letters and digits!');
    }

    if (password.length < 5) {
        throw new Error('Password must be at least 5 characters long!');
    }

    if (password != rePassword) {
        throw new Error('Passwords don\'t match!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ username, hashedPassword });
}

module.exports = {
    register
}