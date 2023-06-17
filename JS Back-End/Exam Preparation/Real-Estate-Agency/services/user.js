const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'qfuih27ftg278fu';

async function register({ username, name, password, rePassword }) {
    const exsistingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (exsistingUsername) {
        throw new Error('Username is already taken');
    }

    if (password.length < 4) {
        throw new Error('The password should be at least four characters long');
    }

    if (password != rePassword) {
        throw new Error('Passwords don\'t match');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        name,
        hashedPassword
    });

    return createSession(user);
}

async function login({username, password}) {
    const user = await User.findOne({username}).collation({locale: 'en', strength: 2});
    if(!user) {
        throw new Error('Wrong email or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if(!match) {
        throw new Error('Wrong email or password');
    }

    return createSession(user);
}

function createSession({_id, username, name}) {
    const payload = {
        _id,
        username, 
        name
    }

    return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    register,
    login,
    verifyToken
}