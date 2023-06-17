const authController = require('express').Router();
const { register, login } = require('../services/user');
const parseError = require('../utils/parsers');

authController.get('/register', (req, res) => {
    res.render('register', { title: 'Register Page' });
});


authController.post('/register', async (req, res) => {
    try {
        const token = await register(req.body);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        res.render('register', {
            title: 'Register Page',
            body: req.body,
            error: parseError(err)
        })
    }
});

authController.get('/login', (req, res) => {
    res.render('login', { title: 'Login Page' });
});

authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        res.render('login', {
            title: 'Login Page',
            body: req.body,
            error: parseError(err)
        });
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;