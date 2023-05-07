const { createHotel, getHotelById } = require('../services/hotel');
const { parseError } = require('../utils/parsers');
const hotelController = require('express').Router();

hotelController.get('/details/:id', async (req, res) => {

    try {
        const hotel = await getHotelById(req.params.id);
        console.log(hotel);
        res.render('details', { hotel });
    } catch (err) {
        res.render('details', {
            error: parseError(err)
        });
    }
});

hotelController.get('/edit/:id', (req, res) => {

    res.render('edit');
});

hotelController.get('/create', (req, res) => {
    res.render('create');
});

hotelController.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        await createHotel(req.body, req.user._id);
        res.redirect('/');
    } catch (err) {
        res.render('create', {
            error: parseError(err),
            body: req.body
        });
    }
});


module.exports = hotelController;