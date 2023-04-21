const { getAllCubes } = require('../services/dataService');

const router = require('express').Router();

router.get('/', (req, res) => {
    const data = getAllCubes();
    res.render('index', { data, title: 'Cubicle'});
});

module.exports = router;
