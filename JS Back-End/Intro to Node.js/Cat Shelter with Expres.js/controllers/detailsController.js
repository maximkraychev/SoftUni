const router = require('express').Router();
const { getCatById } = require('../services/processing');

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const catData = getCatById(id);
    res.render('details', { catData });
})

router.post('/:id/delete', (req, res) => {
    const id = req.params.id;
    
})

module.exports = router;