const { createAccessory } = require('../services/accessoryService');
const { createCube } = require('../services/cubeService');
const { validationResult, body } = require('express-validator');
const { parseError } = require('../utils/parsers');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', { title: 'Create Cube Page' });
});

router.post('/',
    body('name')
        .trim()
        .isLength({ min: 5 }).withMessage('Name must be at least 5 characters long!')
        .isAlphanumeric('en-US', { ignore: ' ' }).withMessage('Name may contain only english letters, whitespaces and numbers!'),
    body('description')
        .trim()
        .isLength({ min: 20 }).withMessage('Description must be at least 20 characters long!')
        .isAlphanumeric('en-US', { ignore: ' ' }).withMessage('Description may contain only english letters, whitespaces and numbers!'),
    body('imageUrl')
        .trim()
        .isURL().withMessage('The given URL is not valid URL!'),
    body('difficultyLevel')
        .trim()
        .isInt({ min: 1, max: 6 }).withMessage('The Difficulty Level must be between 1 and 6!'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }

            const userId = req.user._id;
            const document = await createCube(req.body, userId);
            const id = document._id.toString();
            res.redirect('/details/' + id);
        } catch (err) {
            res.render('create', {
                title: 'Create Cube Page',
                error: parseError(err),
                body: {
                    name: req.body.name,
                    description: req.body.description,
                    imageUrl: req.body.imageUrl,
                    difficultyLevel: req.body.difficultyLevel
                }
            });
        }
    });


router.get('/accessory', (req, res) => {
    res.render('createAccessory', { title: 'Create Accessory' });
});

router.post('/accessory',
    body('name')
        .trim()
        .isLength({ min: 5 }).withMessage('Name must be at least 5 characters long!')
        .isAlphanumeric('en-US', { ignore: ' ' }).withMessage('Name may contain only english letters, whitespaces and numbers!'),
    body('description')
        .trim()
        .isLength({ min: 20 }).withMessage('Description must be at least 20 characters long!')
        .isAlphanumeric('en-US', { ignore: ' ' }).withMessage('Description may contain only english letters, whitespaces and numbers!'),
    body('imageUrl')
        .trim()
        .isURL().withMessage('The given URL is not valid URL!'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);

            if (errors.length > 0) {
                throw errors;
            }

            await createAccessory(req.body);
            res.redirect('/')
        } catch (err) {
            res.render('create', {
                title: 'Create Accessory',
                error: parseError(err),
                body: {
                    name: req.body.name,
                    description: req.body.description,
                    imageUrl: req.body.imageUrl,
                }
            });
        }
    });

module.exports = router;