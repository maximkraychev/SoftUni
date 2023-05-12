const authController = require("../controllers/authController");
const catalogCotroller = require("../controllers/catalog");
const gameController = require("../controllers/gameController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/game', gameController);
    app.use('/catalog', catalogCotroller);
}