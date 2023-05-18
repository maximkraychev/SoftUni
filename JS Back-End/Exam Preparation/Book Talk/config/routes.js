const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");

//TODO.. Add controllers
module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
}