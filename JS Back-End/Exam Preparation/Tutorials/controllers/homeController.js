const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    let template;

    if (req.user) {
        template = 'userHome';
    } else {
        template = 'guestHome';
    }

    res.render(template);
});

module.exports = homeController;