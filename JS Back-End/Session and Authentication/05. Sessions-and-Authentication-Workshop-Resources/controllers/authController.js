const { register, login } = require('../services/authService');

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
        // TODO: save the data in json web token;
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
        // TODO: save data in json web token;
        res.redirect('/');
    } catch (err) {
        res.render('loginPage', {
            title: 'Login Page',
            error: err.message.split('\n')
        });
    }

});



module.exports = router;