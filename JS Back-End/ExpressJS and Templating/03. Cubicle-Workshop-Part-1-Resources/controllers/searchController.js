const { getCubesBySearchParams } = require('../services/dataService');

const router = require('express').Router();

router.post('/', (req, res) => {
    const data = getCubesBySearchParams(req.body);

    if (data.length == 0) {
        res.redirect('/');
    } else {
        res.render('index', { data, title: 'Cubicle'});
    }
});

module.exports = router;