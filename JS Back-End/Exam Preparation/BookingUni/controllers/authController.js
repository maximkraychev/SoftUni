const authController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { parseError } = require('../utils/parsers');
const { register, login } = require('../services/user');

authController.get('/login', (req, res) => {

    res.render('login');
});

authController.post('/login',
    body('email')
        .trim()
        .isAlphanumeric(['en-US'], { ignore: '@.' }).withMessage('Email may contain only english letters and numbers!')
        .isEmail().withMessage('Email should be a valid email address!'),
    body('password')
        .trim()
        .isAlphanumeric().withMessage('Password may contain only english letters and numbers!')
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long!'),
    async (req, res) => {
        console.log(req.body);
        try {
            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }

            const token = await login(req.body);
            res.cookie('token', token);
            res.redirect('/');

        } catch (errors) {
            res.render('login', {
                error: parseError(errors),
                body: {
                    email: req.body.email,
                }
            })
        }
    });

authController.get('/register', (req, res) => {
    res.render('register');
});

authController.post('/register',
    body('email')
        .trim()
        .isAlphanumeric(['en-US'], { ignore: '@.' }).withMessage('Email may contain only english letters and numbers!')
        .isEmail().withMessage('Email should be a valid email address!'),
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required!'),
    body('password')
        .trim()
        .isAlphanumeric().withMessage('Password may contain only english letters and numbers!')
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long!'),
    body('rePassword')
        .trim()
        .custom((value, req) => value == req.req.body.password).withMessage('Passwords don\'t match!'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }

            const token = await register(req.body);
            res.cookie('token', token);
            res.redirect('/');

        } catch (errors) {
            res.render('register', {
                error: parseError(errors),
                body: {
                    email: req.body.email,
                    username: req.body.username,
                }
            })
        }
    });


module.exports = authController;