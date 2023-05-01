const { isUser, isOwner } = require('../middlewares/guards');
const { getCubeById, getCubeByIdPopulated, updateCube, deleteCube } = require('../services/cubeService');
const { validationResult, body } = require('express-validator');
const { parseError } = require('../utils/parsers');

const router = require('express').Router();

router.get('/:cubeId', async (req, res) => {
    try {
        const cubeId = req.params.cubeId;
        const cube = await getCubeByIdPopulated(cubeId);

        const cubeOwnerId = cube.ownerId.toString();
        const userId = req.user?._id;
        cube.isOwner = cubeOwnerId == userId;

        res.render('details', { cube, title: 'Cubicle' });
    } catch (err) {
        console.log(err.message);
        //TODO...
    }
})

router.get('/edit/:cubeId', isUser(), isOwner(), async (req, res) => {
    try {
        const cubeId = req.params.cubeId;
        const cube = await getCubeById(cubeId);
        res.render('editCubePage', { body: cube, title: 'Edit Cube Page' });
    } catch (err) {
        console.log(err.message);
        //TODO...
    }
});

router.post('/edit/:cubeId', isUser(), isOwner(),
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

            const cubeId = req.params.cubeId;
            await updateCube(cubeId, req.body);
            res.redirect('/details/' + cubeId);
        } catch (err) {
            res.render('create', {
                title: 'Edit Cube Page',
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

router.get('/delete/:cubeId', isUser(), isOwner(), async (req, res) => {
    try {
        const cubeId = req.params.cubeId;
        const cube = await getCubeById(cubeId);
        res.render('deleteCubePage', { cube, title: 'Delete Cube Page' });
    } catch (err) {
        console.log(err.message);
        //TODO...
    }
});

router.post('/delete/:cubeId', isUser(), isOwner(), async (req, res) => {
    try {
        const cubeId = req.params.cubeId;
        await deleteCube(cubeId);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        //TODO..
    }
});

module.exports = router;