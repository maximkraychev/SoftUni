const { getCubeById } = require('../services/cubeService');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const cube = await getCubeById(id);
        res.render('details', {cube, title: 'Cubicle'});
    } catch(err) {
        console.log(err.message);
        //TODO...
    }
})

module.exports = router;