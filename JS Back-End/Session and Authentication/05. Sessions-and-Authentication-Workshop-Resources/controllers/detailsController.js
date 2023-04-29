const { isUser, isOwner } = require('../middlewares/guards');
const { getCubeById, getCubeByIdPopulated, updateCube, deleteCube } = require('../services/cubeService');

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
        res.render('editCubePage', { cube, title: 'Edit Cube Page' });
    } catch (err) {
        console.log(err.message);
        //TODO...
    }
});

router.post('/edit/:cubeId', isUser(), isOwner(), async (req, res) => {
    try {
        const cubeId = req.params.cubeId;
        await updateCube(cubeId, req.body);
        res.redirect('/details/' + cubeId);
    } catch (err) {
        console.log(err.message);
        //TODO..
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