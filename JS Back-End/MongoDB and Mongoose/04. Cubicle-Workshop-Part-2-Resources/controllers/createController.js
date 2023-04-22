const { createCube } = require('../services/cubeService');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', { title: 'Create Cube Page' });
});

router.post('/', async (req, res) => {
    try {
        const document = await createCube(req.body);
        const id = document._id.toString();
        res.redirect('/details/' + id);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;