const router = require('express').Router();
const { getCatById, handlerDeleteCat, editData, getBreedsData } = require('../services/processing');

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
    const breeds = getBreedsData().filter(x => x != data.breed);  //Getting all breeds and filter them so the currently selected one is not in the array 
    data.breeds = breeds;                                         //We filter that so later when we render the data we will be able to show the previously selected one and there will be no duplicates;
    res.render('editCat', { data });

})

router.post('/:id/edit', async (req, res) => {
    try {
        const id = await editData(req, res);
        res.redirect('/details/' + id);
    } catch(err) {
        console.log(err);
    }
})

module.exports = router;