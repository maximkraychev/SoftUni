const authController = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const { register, login } = require('../services/user');
const parseError = require('../utils/parsers');


authController.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register Page', body: { male: true } });
});

authController.post('/register', isGuest(), async (req, res) => {
    try {
        const token = await register(req.body);
        res.cookie('token', token, {httpOnly: true});
        res.redirect('/');
    } catch (err) {
        req.body.gender == 'male' ? req.body.male = true : req.body.female = true;
        res.render('register', {
            title: 'Register Page',
            body: req.body,
            error: parseError(err)
        })
    }
});


authController.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login Page' });
});


authController.post('/login', isGuest(), async (req, res) => {
    try {
        const token = await login(req.body);
        res.cookie('token', token, {httpOnly: true});
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