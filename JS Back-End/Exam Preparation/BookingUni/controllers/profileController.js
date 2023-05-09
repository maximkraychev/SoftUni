const { isUser } = require('../middlewares/guards');
const { searchBookedHotelByUserId } = require('../services/hotel');

const profileController = require('express').Router();

profileController.get('/', isUser(), async (req, res) => {
    const bookedHotels = await searchBookedHotelByUserId(req.user._id);

    res.render('profile', {
        username: req.user.username,
        email: req.user.email,
        bookedHotels: bookedHotels.map((x, i, arr) => i == arr.length - 1 ? x.name : x.name + ',')
    });
});

module.exports = profileController;