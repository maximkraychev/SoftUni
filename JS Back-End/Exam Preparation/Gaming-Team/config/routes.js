const authController = require("../controllers/authController");
const catalogCotroller = require("../controllers/catalogController");
const gameController = require("../controllers/gameController");
const homeController = require("../controllers/homeController");
const { isUser } = require("../middlewares/guards");

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/game', isUser(), gameController);
    app.use('/catalog', catalogCotroller);
}