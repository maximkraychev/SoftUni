const authController = require('express').Router();

authController.get('/register', (req, res) => {
    res.render('register', {title: 'Register Page - Gaming Team'});
});

authController.post('/register', (req, res) => {
    console.log(req.body);
});

authController.get('/login', (req, res) => {
    res.render('login', {title: 'Login Page - Gaming Team'});
});

module.exports = authController;