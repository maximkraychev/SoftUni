const router = require('express').Router();
const { getBreedsData, createBreed, newCatHandleData } = require('../services/processing');

router.get('/add-breed', (req, res) => {
    res.render('addBreed');
});

router.post('/add-breed', async (req, res) => {
    const { breed } = req.body;
    try {
        await createBreed(breed);
    } catch (err) {
        console.log(err);
    }

    res.redirect('/');
})

router.get('/add-cat', (req, res) => {
    const breeds = getBreedsData();
    res.render('addCat', { breeds });
});

router.post('/add-cat', async (req, res) => {

    try {
        const catId = await newCatHandleData(req, res);
        console.log(catId);
        res.redirect('/details/' + catId);
    } catch(err) {
        console.log(err.message);
        //TODO handle the error;
    }
})

module.exports = router;