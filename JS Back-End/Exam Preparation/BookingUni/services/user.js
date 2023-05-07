const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'fiuq3wh552eg2egfui2';


async function register({ email, username, password }) {
    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (existingEmail) {
        throw new Error('Email is taken!')
    }

    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existingUsername) {
        throw new Error('Username is taken!')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, username, hashedPassword });

    return createSession(user);
}


async function login({ email, password }) {

    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (!user) {
        throw new Error('Wrong username or password!');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error('Wrong username or password!');
    }

    return createSession(user);
}

function createSession({ _id, email, username }) {
    const payload = {
        _id,
        email,
        username
    }

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '4h'});
    return token;
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    register,
    login,
    verifyToken,
}