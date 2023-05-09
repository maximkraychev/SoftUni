const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    let template;
    
    const date = new Date()
    const firstPart = date.toString().slice(0, 10);
    const secondPart = date.toTimeString().slice(0, 8);
    
    console.log(firstPart + ' ' + secondPart);
    if (req.user) {
        template = 'userHome';
    } else {
        template = 'guestHome';
    }

    res.render(template);
});

module.exports = homeController;