const productController = require('express').Router();
const { isOwner, isUser } = require('../middlewares/guards');
const preloader = require('../middlewares/preloader');
const { createProduct, deleteProduct } = require('../services/product');
const parseError = require('../utils/parsers');

//Create

productController.get('/create', isUser(), async (req, res) => {
    res.render('create', { title: 'Create Page' });
});

productController.post('/create', isUser(), async (req, res) => {
    try {
        await createProduct(req.body, req.user._id);
        res.redirect('/catalog');
    } catch (err) {
        res.render('create', {
            title: 'Create Page',
            body: req.body,
            error: parseError(err)
        });
    }
});

//Details
productController.get('/details/:id', preloader(), async (req, res) => {
    userStates(req, res);
    res.render('details', { title: 'Details Page' });
});

//Aplay
productController.get('/details/:id/applay', isUser(), preloader(true), async (req, res) => {
    try {
        res.locals.product.usersApplied
            .push(req.user._id)

        await res.locals.product.save();
        userStates(req, res);
        res.locals.product = res.locals.product.toObject();
        res.render('details', { title: 'Details Page', });
    } catch (err) {
        res.render('/', {title: 'Home Page', error: ['Someting went wrong please try again later']} )
    }
});

//Delete
productController.get('/details/:id/delete', isUser(), preloader(), isOwner(), async (req, res) => {
    try {
        await deleteProduct(req.params.id);
        res.redirect('/catalog');
    } catch (err) {
        userStates(req, res);
        res.render('details', {
            title: 'Details Page',
            error: parseError(err)
        });
    }
});

//Edit
productController.get('/details/:id/edit', isUser(), preloader(), isOwner(), (req, res) => {
    res.render('edit', {
        title: 'Edit Page'
    });
});

productController.post('/details/:id/edit', isUser(), preloader(true), isOwner(), async (req, res) => {
    try {
        const product = res.locals.product;
        product.headline = req.body.headline  
        product.location = req.body.location  
        product.companyName = req.body.companyName  
        product.companyDescription = req.body.companyDescription  
        await product.save();
        res.redirect(`/product/details/${req.params.id}`);
    } catch (err) {
        res.locals.product = res.locals.product.toObject();
        res.render('edit', {
            title: 'Edit Page',
            body: res.locals.product,
            error: parseError(err)
        });
    }
});

// User State for locals if needed;
function userStates(req, res) {
    res.locals.isOwner = req.user && res.locals.product.author._id.toString() == req.user._id.toString();
    res.locals.isAlredyApplied = req.user && res.locals.product.usersApplied.some(x => x._id.toString() == req.user._id.toString());
    res.locals.numberOfApplied = res.locals.product.usersApplied.length;
}

module.exports = productController;