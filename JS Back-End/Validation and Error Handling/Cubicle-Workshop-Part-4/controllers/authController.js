const { register, login } = require('../services/authService');
const jwt = require('jsonwebtoken');
const { validationResult, body } = require('express-validator');
const { parseError } = require('../utils/parsers');

const router = require('express').Router();


router.get('/register', (req, res) => {
    res.render('registerPage', { title: 'Register Page' })
});

router.post('/register',
    body('username')
        .trim()
        .isAlphanumeric().withMessage('Username may contain only english letters and numbers!')
        .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long!'),
    body('password')
        .trim()
        .isAlphanumeric().withMessage('Password may contain only english letters and numbers!')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long!'),
    body('repeatPassword')
        .trim()
        .custom((value, { req }) => value == req.body.password).withMessage('Passwords don\'t match!'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }
            const data = await register(req.body.username, req.body.password);
            attachToken(req, res, data);
            res.redirect('/');
        } catch (err) {
            res.render('registerPage', {
                title: 'Register Page',
                error: parseError(err),
                body: {
                    username: req.body.username
                }
            });
        }
    });


router.get('/login', (req, res) => {
    res.render('loginPage', { title: 'Login Page' });
});

router.post('/login',
    body('username')
        .trim()
        .isAlphanumeric().withMessage('Username may contain only english letters and numbers!')
        .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long!'),
    body('password')
        .trim()
        .isAlphanumeric().withMessage('Password may contain only english letters and numbers!')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long!'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }

            const data = await login(req.body.username, req.body.password);
            attachToken(req, res, data);
            res.redirect('/');
        } catch (err) {
            res.render('loginPage', {
                title: 'Login Page',
                error: parseError(err),
                body: {
                    username: req.body.username
                }
            });
        }
    });

// TODO: Chnage the logout to post;
router.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/');
})

function attachToken(req, res, data) {
    const token = req.signJwt(data);
    res.cookie('jwt', token, { maxAge: 3600000 });
}



module.exports = router;