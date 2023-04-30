const { getCubesBySearchParams } = require('../services/cubeService');

const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        const data = await getCubesBySearchParams(req.body);

        if (data.length == 0) {
            res.redirect('/');
        } else {
            res.render('index', { data, title: 'Cubicle' });
        }
    } catch (err) {
        console.log(err.message);
        //TODO...
    }
});

module.exports = router;