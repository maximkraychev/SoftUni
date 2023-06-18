const productController = require('express').Router();
const { isOwner, isUser } = require('../middlewares/guards');
const preloader = require('../middlewares/preloader');
const { createProduct, deleteProduct, donate } = require('../services/product');
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

//Donate
productController.get('/details/:id/donate', isUser(), preloader(), async (req, res) => {
    try {
        if (res.locals.product.owner.toString() == req.user._id) {
            throw new Error('You are the owner of the post and cannot donate!');
        }

        if (res.locals.product.donations.some(x => x.toString() == req.user._id.toString())) {
            throw new Error('You have already donated to this post!');
        }

        await donate(req.params.id, req.user._id);
        res.redirect(`/product/details/${req.params.id}`);
        
    } catch (err) {
        res.render('404', {
            title: '404 Page',
            error: parseError(err)
        })
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
        title: 'Edit Page',
        body: res.locals.product
    })
});

productController.post('/details/:id/edit', isUser(), preloader(true), isOwner(), async (req, res) => {
    try {
        const product = res.locals.product; // for shorter name;
        product.name = req.body.name;
        product.years = req.body.years;
        product.kind = req.body.kind;
        product.image = req.body.image;
        product.need = req.body.need;
        product.location = req.body.location;
        product.description = req.body.description;
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
    res.locals.isOwner = req.user && res.locals.product.owner.toString() == req.user._id.toString();
    res.locals.isAlreadyDonated = req.user && res.locals.product.donations.some(x => x.toString() == req.user._id.toString());
}

module.exports = productController;