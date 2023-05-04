const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const hotelController = require('../controllers/hotelController');

module.exports = (app) => {
    app.use(homeController);
    app.use('/auth', authController);
    app.use('/hotel', hotelController);
}