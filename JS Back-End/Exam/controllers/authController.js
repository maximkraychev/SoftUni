const authController = require('express').Router();
const { isUser, isGuest } = require('../middlewares/guards');
const { register, login } = require('../services/user');
const parseError = require('../utils/parsers');

//TODO... Add title and name of template
authController.get('/register', isGuest(),  (req, res) => {
    res.render('register', { title: '' });
});

//TODO... chnage the name of the template and redirect 
authController.post('/register', isGuest(), async (req, res) => {
    try {
        const token = await register(req.body);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        //TODO.. Chnage the title and name of template
        res.render('register', {
            title: '',
            body: req.body,
            error: parseError(err)
        })
    }
});

//TODO... chnage the title and name of the template
authController.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: '' });
});

//TODO... chnage the name of the template and redirect
authController.post('/login', isGuest(), async (req, res) => {
    try {
        const token = await login(req.body);
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        //TODO... chnage the title and name of the template
        res.render('login', {
            title: '',
            body: req.body,
            error: parseError(err)
        });
    }
});

//TODO... chnage the name of the template and redirect 
authController.get('/logout', isUser(), (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;