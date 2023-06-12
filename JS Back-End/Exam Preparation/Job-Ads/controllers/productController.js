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
//TODO... Change: (Path), (Guards), (Redirect)
productController.get('/details/:id/delete', isUser(), preloader(), isOwner(), async (req, res) => {
    try {
        await deleteProduct(req.params.id);
        res.redirect('/catalog');
    } catch (err) {
        //TODO... Chnage (name of the Template), (Title)
        userStates(req, res);
        res.render('details', {
            title: '',
            error: parseError(err)
        });

        //TODO.. Or redirect
        console.error(err);
        res.redirect(`product/details/${req.params.id}`);
    }
});

//Edit
//TODO... Change: (Path), (Guards), (Name of the Template), (Title)
productController.get('/details/:id/edit', isUser(), preloader(), isOwner(), (req, res) => {
    res.render('edit', {
        title: ''
    });
});

//TODO... Change: (Path), (Guards), (Redirect)
productController.post('/details/:id/edit', isUser(), preloader(true), isOwner(), async (req, res) => {
    try {
        //TODO... transfer the data from req.body to product
        const product = res.locals.product;
        //product.name = req.body.name  //EXAMPLE  
        await product.save();
        res.redirect(`/product/details/${req.params.id}`);
    } catch (err) {
        //TODO... Change: (Name of the Template), (Title)
        res.locals.product = res.locals.product.toObject();
        res.render('edit', {
            title: '',
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