const { getCubeByIdPopulated } = require('../services/cubeService');

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

module.exports = router;