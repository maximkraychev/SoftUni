const router = require('express').Router();
const { getAccessoriesToBeAttach } = require('../services/accessoryService');
const { getCubeById, attachAccessory } = require('../services/cubeService');

router.get('/accessory/:id', async (req, res) => {
    try {
        const cube = await getCubeById(req.params.id);
        const currentAccessories = cube.accessories;
        
        const accessoriesToBeAttach = await getAccessoriesToBeAttach(currentAccessories);
        const isThereSomethingToAttach = accessoriesToBeAttach.length > 0;

        res.render('attachAccessory', { cube, accessoriesToBeAttach, isThereSomethingToAttach, title: 'Attach Accessory' });
    } catch (err) {
        console.log(err.message);
        //TODO...
    }
});

router.post('/accessory/:id', async (req, res) => {
    const cubeId = req.params.id;
    const accessoryId = req.body.accessory;
    try {
        await attachAccessory(cubeId, accessoryId);
        res.redirect('/details/' + cubeId);
    } catch (err) {
        console.log(err.message);
        //TODO...
    }
})


module.exports = router;