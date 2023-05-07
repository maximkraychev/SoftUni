const { isOwner, isUser } = require('../middlewares/guards');
const { preloadHotel } = require('../middlewares/preLoaders');
const { createHotel, getHotelById } = require('../services/hotel');
const { parseError } = require('../utils/parsers');
const hotelController = require('express').Router();

hotelController.get('/details/:id', isUser(), preloadHotel(), async (req, res) => {

    try {
        const isOwner = res.locals.hotel.owner.toString() == req.user._id.toString();
        const isAlreadyBooked = res.locals.hotel.bookedUsers
        res.render('details', {
            hotel: res.locals.hotel,
            isOwner,
            isAlreadyBooked
        });
    } catch (err) {
        res.render('details', {
            error: parseError(err)
        });
    }
});

hotelController.get('/edit/:id', preloadHotel(), isOwner(), (req, res) => {

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