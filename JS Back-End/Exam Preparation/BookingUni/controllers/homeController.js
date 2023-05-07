const { getAllHotels } = require('../services/hotel');
const { parseError } = require('../utils/parsers');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    try {
        const hotels = await getAllHotels();
        res.render('home', { title: 'BookingUni', hotels });
    } catch (err) {
        res.render('home', {
            title: 'BookingUni',
            hotels: [],
            error: parseError(err)
        })
    }
});

module.exports = homeController;