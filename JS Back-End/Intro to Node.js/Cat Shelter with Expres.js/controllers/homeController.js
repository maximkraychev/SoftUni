const { getCatsData } = require('../services/processing');

const router = require('express').Router();


router.get('/', (req, res) => {
    const data = Object.values(getCatsData());
    res.render('index', { isHome: true, data });
});

module.exports = router;