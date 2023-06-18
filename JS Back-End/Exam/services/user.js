const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'qfuih27ftg278fu';

async function register({ email, password, rePassword }) {
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
        email,
        hashedPassword
    });

    return createSession(user);
}

async function login({email, password}) {
    const user = await User.findOne({email}).collation({locale: 'en', strength: 2});
    if(!user) {
        throw new Error('Wrong email or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if(!match) {
        throw new Error('Wrong email or password');
    }

    return createSession(user);
}

function createSession({_id, email}) {
    const payload = {
        _id,
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
    verifyToken
}