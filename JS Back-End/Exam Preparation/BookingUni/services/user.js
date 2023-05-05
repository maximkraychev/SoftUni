const User = require("../models/user");
const bcrypt = require('bcrypt');

async function register({ email, username, password }) {

    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existingEmail) {
        throw new Error('Email is taken!')
    }

    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existingUsername) {
        throw new Error('Username is taken!')
    }

    const hashedPassword = bcrypt.hash(password, 10);

    await User.create({ email, username, hashedPassword });

}