const authController = require("../controllers/authController");
const catalogCotroller = require("../controllers/catalogController");
const homeController = require("../controllers/homeController");
const productController = require("../controllers/productController");

//TODO.. Add controllers
module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/catalog', catalogCotroller);
    app.use('/product', productController);
    app.all('*', (req, res) => res.render('404', {title: '404 Page'}));
}