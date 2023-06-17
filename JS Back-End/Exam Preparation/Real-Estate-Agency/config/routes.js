const authController = require("../controllers/authController");
const catalogCotroller = require("../controllers/catalogController");
const homeController = require("../controllers/homeController");
const productController = require("../controllers/productController");
const searchController = require("../controllers/searchController");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/catalog', catalogCotroller);
    app.use('/product', productController);
    app.use('/search', searchController);
    app.all('*', (req, res) => res.render('404', { title: 'Not Found Page' }));
}