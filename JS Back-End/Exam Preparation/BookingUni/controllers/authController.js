const authController = require('express').Router();

authController.get('/login', (req, res) => {

    res.render('login');
});

authController.get('/register', (req, res) => {
    res.render('register');
});

authController.get('/logout', (req, res) => {
    
});


module.exports = authController;