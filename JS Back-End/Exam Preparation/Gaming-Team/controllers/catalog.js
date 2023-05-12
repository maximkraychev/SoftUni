const catalogCotroller = require('express').Router();

catalogCotroller.get('/', (req, res) => {
    res.render('catalog', { title: 'Catalog Page - Gaming Team' });
});

module.exports = catalogCotroller;