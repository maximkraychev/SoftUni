const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Cubicle'});
});

module.exports = router;
