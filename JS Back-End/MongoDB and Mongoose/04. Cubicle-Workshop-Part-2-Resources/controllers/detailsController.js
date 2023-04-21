const { getCubeById } = require('../services/dataService');

const router = require('express').Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const cube = getCubeById(id);
    res.render('details', {cube, title: 'Cubicle'});
})

module.exports = router;