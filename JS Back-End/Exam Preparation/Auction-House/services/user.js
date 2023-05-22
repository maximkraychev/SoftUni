const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'qfuih27ftg278fu';

async function register({ email, firstName, lastName, password, rePassword }) {

    const exsistingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    if (exsistingEmail) {
        throw new Error('Email is already taken');
    }

    if (password.length < 1) {
        throw new Error('The password cannot be empty');
    }

    if (password != rePassword) {
        throw new Error('Passwords don\'t match');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
        email,
        firstName,
        lastName,
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

function createSession({_id, email, firstName, lastName}) {
    const payload = {
        _id,
        email,
        firstName,
        lastName
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