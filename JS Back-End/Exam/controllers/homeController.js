const homeController = require('express').Router();
//TODO... Change: (Path), (Name of the template), (Title)
homeController.get('/', (req, res) => {
    res.render('home', {title: 'Home Page'});
});


module.exports = homeController;