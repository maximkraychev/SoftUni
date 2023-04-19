const router = require('express').Router();

router.get('/:id', (req, res) => {
    res.render('deails', {title: 'Cubicle'});
})

module.exports = router;