const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'qfuih27ftg278fu';

async function register({ username, email, password, rePassword }) {
    const exsistingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (exsistingUsername) {
        throw new Error('Username is already taken');
    }

    const exsistingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (exsistingEmail) {
        throw new Error('Email is already taken');
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
        email,
        hashedPassword
    });

    return createSession(user);
}

async function login({ username, password }) {
    const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (!user) {
        throw new Error('Wrong username or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error('Wrong username or password');
    }

    return createSession(user);
}

async function getUserById(userId) {
    return User.findById(userId);
}

async function getUserByIdPopulated(userId) {
    return User.findById(userId).populate('uploadedPhoto').lean();
}

function createSession({ _id, username, email }) {
    const payload = {
        _id,
        username,
        email
    }

    return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    register,
    login,
    verifyToken,
    getUserById,
    getUserByIdPopulated,
}