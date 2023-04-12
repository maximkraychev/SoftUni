const router = require('express').Router();
const { getCatById, handlerDeleteCat } = require('../services/processing');

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const catData = getCatById(id);
    res.render('details', { catData });
})

router.post('/:id/delete', async (req, res) => {
    const id = req.params.id;
    await handlerDeleteCat(id);
    res.redirect('/');
})

module.exports = router;