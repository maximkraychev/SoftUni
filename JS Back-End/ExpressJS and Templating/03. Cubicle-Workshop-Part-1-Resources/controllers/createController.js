const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('create', { title: 'Create Cube Page' });
});

module.exports = router;