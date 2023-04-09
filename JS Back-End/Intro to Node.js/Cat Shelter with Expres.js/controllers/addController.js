const router = require('express').Router();
const { getBreedsData, createBreed } = require('../services/processing');


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
    const breeds = getBreedsData().map(x => {return {'breed': x}});
    res.render('addCat', { breeds });
});

module.exports = router;