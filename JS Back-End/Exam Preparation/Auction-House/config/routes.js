const authController = require("../controllers/authController");
const catalogCotroller = require("../controllers/catalogController");
const closedAuctionsController = require("../controllers/closedAuctionsController");
const homeController = require("../controllers/homeController");
const productController = require("../controllers/productController");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/catalog', catalogCotroller);
    app.use('/product', productController);
    app.use('/closedAuctions', closedAuctionsController);
    app.all('*', (req, res) => res.render('404', {title: 'Page Not Found'}));
}