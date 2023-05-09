const authController = require('express').Router();
const { register } = require('../services/user');
const { parseError } = require('../utils/parsers');

authController.get('/register', (req, res) => {

    res.render('register');
});

authController.post('/register', async (req, res) => {
    try {
        if(req.body.password)
        console.log(req.body);
        const user = await register(req.body);
        console.log(user);
        res.redirect('/');
    } catch (err) {
        console.log(parseError(err));
        res.render('register', { 
            body: req.body,
            error: parseError(err) 
        });
    }
});

authController.get('/login', (req, res) => {

    res.render('login');
});

authController.get('/logout', (req, res) => {

    res.render('/');
});

module.exports = authController;