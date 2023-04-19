const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const createController = require('../controllers/createController');
const detailsController = require('../controllers/detailsController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/about', aboutController);
    app.use('/create', createController);
    app.use('/details', detailsController);
    app.all('*', (req, res) => { res.render('404', { title: 'Page Not Found' }) });
};