const notFoundController = require("../controllers/404Controller");
const authController = require("../controllers/authController");
const catalogCotroller = require("../controllers/catalogController");
const gameController = require("../controllers/gameController");
const homeController = require("../controllers/homeController");
const searchController = require("../controllers/sreachController");
const { isUser } = require("../middlewares/guards");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/game', gameController);
    app.use('/catalog', catalogCotroller);
    app.use('/search', isUser(), searchController);
    app.use('*', notFoundController);
}