const { getAllCubes } = require('../services/cubeService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const data = await getAllCubes();
        res.render('index', { data, title: 'Cubicle' });
    } catch (err) {
        console.log(err.message);
        //TODO...
    }
});

module.exports = router;
