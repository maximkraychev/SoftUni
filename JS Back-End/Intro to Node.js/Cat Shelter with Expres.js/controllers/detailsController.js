const router = require('express').Router();
const { getCatById, handlerDeleteCat, editData } = require('../services/processing');

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

router.get('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const data = getCatById(id);
    res.render('editCat', { data });

})

// router.post('/:id/edit', async (req, res) => {
//     console.log(req);
//     await editData(req, res);
// })

module.exports = router;