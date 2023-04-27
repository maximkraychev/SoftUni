const { register, login } = require('../services/authService');
const jwt = require('jsonwebtoken');

const router = require('express').Router();


router.get('/register', (req, res) => {
    res.render('registerPage', { title: 'Register Page' })
});

router.post('/register', async (req, res) => {
    try {
        const username = req.body.username.trim();
        const password = req.body.password.trim();
        const repeatPassword = req.body.repeatPassword.trim();

        if (username == '' || password == '') {
            throw new Error('All fields are required!');
        }

        if (password != repeatPassword) {
            throw new Error('Passwords don\'t match!');
        }

        const data = await register(username, password);
        attachToken(req, res, data);
        res.redirect('/');
    } catch (err) {
        res.render('registerPage', {
            title: 'Register Page',
            error: err.message.split('\n')
        });
    }
});


router.get('/login', (req, res) => {
    res.render('loginPage', { title: 'Login Page' });
});

router.post('/login', async (req, res) => {
    try {
        const username = req.body.username.trim();
        const password = req.body.password.trim();

        if (username == '' || password == '') {
            throw new Error('All fields are required!');
        }

        const data = await login(username, password);
        attachToken(req, res, data);
        res.redirect('/');
    } catch (err) {
        res.render('loginPage', {
            title: 'Login Page',
            error: err.message.split('\n')
        });
    }

});

function attachToken(req, res, data) {
    const token = req.signJwt(data);
    res.cookie('jwt', token, { maxAge: 3600000 });
}



module.exports = router;