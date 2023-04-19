const { createCube } = require('../services/dataService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', { title: 'Create Cube Page' });
});

router.post('/', async (req, res) => {
    try {
        const { name, imageUrl, description, difficultyLevel } = req.body;
        const id = await createCube(name, imageUrl, description, difficultyLevel);
        res.redirect('/details/' + id);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;