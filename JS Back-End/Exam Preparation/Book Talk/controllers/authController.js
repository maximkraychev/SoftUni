const authController = require('express').Router();
const { register, login } = require('../services/user');
const parseError = require('../utils/parsers');

//TODO... Add title and name of template
authController.get('/register', (req, res) => {
    res.render('register', { title: '' });
});

//TODO... chnage the name of the template and redirect 
authController.post('/register', async (req, res) => {
    try {
        const token = await register(req.body);
        res.cookie('token', token);
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
authController.get('/login', (req, res) => {
    res.render('login', { title: '' });
});

//TODO... chnage the name of the template and redirect
authController.post('/login', async (req, res) => {
    try {
        const token = await login(req.body);
        res.cookie('token', token);
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
authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;