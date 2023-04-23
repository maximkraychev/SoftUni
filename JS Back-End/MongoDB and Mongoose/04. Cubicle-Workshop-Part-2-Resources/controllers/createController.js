const { createAccessory } = require('../services/accessoryService');
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


router.get('/accessory', (req, res) => {
    res.render('createAccessory', { title: 'Attach Accessory' });
});

router.post('/accessory', async (req, res) => {
    try {
        await createAccessory(req.body);
        res.redirect('/')
    } catch(err) {
        console.log(err.message);
        //TODO..
    }
});

module.exports = router;