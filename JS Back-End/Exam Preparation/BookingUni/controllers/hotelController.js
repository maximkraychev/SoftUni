const hotelController = require('express').Router();

hotelController.get('/details/:id', (req, res) => {


});

hotelController.get('/edit/:id', (req, res) => {

res.render('edit');
});


module.exports = hotelController;