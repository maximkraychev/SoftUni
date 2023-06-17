const productController = require('express').Router();
const { isOwner, isUser } = require('../middlewares/guards');
const preloader = require('../middlewares/preloader');
const { createProduct, deleteProduct, rendHouse } = require('../services/product');
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

//Rent
productController.get('/details/:id/rent', isUser(), preloader(), async (req, res) => {
    try {

        if (res.locals.product.rentedHome.some(x => x._id.toString() == req.user._id.toString())) {
            throw new Error('You have already rented that home');
        }

        if(res.locals.product.availablePieces < 1) {
            throw new Error('There are no space left');
        }

        await rendHouse(req.params.id, req.user._id);
        res.redirect(`/product/details/${req.params.id}`);
    } catch (err) {
        res.render('404', {
            title: 'Not Found Page',
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
//TODO... Change: (Path), (Guards), (Name of the Template), (Title)
productController.get('/details/:id/edit', isUser(), preloader(), isOwner(), (req, res) => {
    res.render('edit', {
        title: '',
        body: res.locals.product

    })
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
    res.locals.isOwner = req.user && res.locals.product.owner.toString() == req.user._id.toString();
    res.locals.isAlreadyRented = req.user && res.locals.product.rentedHome.some(x => x._id.toString() == req.user._id.toString());
    res.locals.isFreeSpaceLeft = res.locals.product.availablePieces > 0;
    res.locals.tenants = res.locals.product.rentedHome.length != 0 ? res.locals.product.rentedHome.map(x => x.name).join(', ') : false;
}

module.exports = productController;