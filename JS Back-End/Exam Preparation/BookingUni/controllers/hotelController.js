const { isOwner, isUser } = require('../middlewares/guards');
const { preloadHotel } = require('../middlewares/preLoaders');
const { createHotel, getHotelByIdRaw, deleteHotel } = require('../services/hotel');
const { parseError } = require('../utils/parsers');
const hotelController = require('express').Router();

hotelController.get('/details/:id', isUser(), preloadHotel(), async (req, res) => {

    try {
        const isOwner = res.locals.hotel.owner.toString() == req.user._id.toString();
        const isAlreadyBooked = res.locals.hotel.bookedUsers.some(x => x.toString() == req.user._id.toString());
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

hotelController.get('/details/:id/booked', isUser(), preloadHotel(true), (req, res) => {
    try {
        if (res.locals.hotel.owner.toString() == req.user._id.toString()) {
            throw new Error('You are the owner and cannot book this hotel!');
        } else if (res.locals.hotel.bookedUsers.some(x => x.toString() == req.user._id.toString())) {
            throw new Error('You\'ve already booked this hotel!');
        } else {
            res.locals.hotel.bookedUsers.push(req.user._id);
            res.locals.hotel.save();
        }

        res.redirect(`/hotel/details/${req.params.id}`);
    } catch (err) {
        const isOwner = res.locals.hotel.owner.toString() == req.user._id.toString();
        const isAlreadyBooked = res.locals.hotel.bookedUsers.some(x => x.toString() == req.user._id.toString());
        res.render('details', {
            hotel: res.locals.hotel.toObject(),
            error: parseError(err),
            isOwner,
            isAlreadyBooked
        })
    }
});

hotelController.get('/edit/:id', preloadHotel(), isOwner(), (req, res) => {
    res.render('edit', { hotel: res.locals.hotel, });
});

hotelController.post('/edit/:id', preloadHotel(), isOwner(), async (req, res) => {
    try {
        const hotel = await getHotelByIdRaw(req.params.id);
        hotel.name = req.body.name;
        hotel.city = req.body.city;
        hotel.freeRooms = req.body.freeRooms;
        hotel.imgUrl = req.body.imgUrl;
        await hotel.save();
        res.redirect(`/hotel/details/${req.params.id}`);
    } catch (err) {
        res.render('edit', {
            error: parseError(err),
            hotel: res.locals.hotel
        });
    }
});

hotelController.get('/create', isUser(), (req, res) => {
    res.render('create');
});

hotelController.post('/create', isUser(), async (req, res) => {
    try {
        await createHotel(req.body, req.user._id);
        res.redirect('/');
    } catch (err) {
        res.render('create', {
            error: parseError(err),
            body: req.body
        });
    }
});

hotelController.get('/delete/:id', preloadHotel(), isOwner(), async (req, res) => {
    try {  
        await deleteHotel(req.params.id);
        res.redirect('/');
    } catch (err) {
        const isOwner = res.locals.hotel.owner.toString() == req.user._id.toString();
        const isAlreadyBooked = res.locals.hotel.bookedUsers.some(x => x.toString() == req.user._id.toString());
        res.render('details', {
            hotel: res.locals.hotel,
            error: parseError(err),
            isOwner,
            isAlreadyBooked
        });
    }
});


module.exports = hotelController;