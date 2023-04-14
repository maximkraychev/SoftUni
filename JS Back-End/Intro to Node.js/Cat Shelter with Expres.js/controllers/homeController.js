const { getCatsData } = require('../services/processing');
const router = require('express').Router();

router.get('/', (req, res) => {
    const search = req.query.search || '';
    const data = getCatsData(search);
    res.render('index', { isHome: true, data });
});

module.exports = router;