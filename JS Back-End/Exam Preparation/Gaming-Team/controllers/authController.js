const authController = require('express').Router();
const { register } = require('../services/user');
const parseError = require('../utils/parsers');


authController.get('/register', (req, res) => {
    res.render('register', { title: 'Register Page - Gaming Team' });
});

authController.post('/register', async (req, res) => {
    try {
        const token = await register(req.body);
        res.cookie('token', token);
        res.redirect('/');
    } catch (err) {
        res.render('register', {
            title: 'Register Page - Gaming Team',
            body: req.body,
            error: parseError(err)
        })
    }
});

authController.get('/login', (req, res) => {
    res.render('login', { title: 'Login Page - Gaming Team' });
});

module.exports = authController;