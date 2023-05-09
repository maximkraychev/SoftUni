const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'uifeh284trf628g';

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
    const user = User.create({ username, hashedPassword });

    return createSession(user);
}

async function login({ username, password }) {
    const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (!user) {
        throw new Error('Wrong username or password!');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if (match == false) {
        throw new Error('Wrong username or password');
    }

    return createSession(user);
}

function createSession({ _id, username }) {
    const payload = {
        _id,
        username
    }

    const token = jwt.sign(payload, JWT_SECRET);
    return token;
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}


module.exports = {
    register,
    login,
    verifyToken
}