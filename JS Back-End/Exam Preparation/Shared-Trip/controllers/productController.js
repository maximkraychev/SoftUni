const productController = require('express').Router();
const { isOwner, isUser } = require('../middlewares/guards');
const preloader = require('../middlewares/preloader');
const { createProduct, deleteProduct, takeSeat } = require('../services/product');
const parseError = require('../utils/parsers');

//Create
productController.get('/create', isUser(), async (req, res) => {
    res.render('create', { title: 'Offer Trip' });
});

productController.post('/create', isUser(), async (req, res) => {
    try {
        await createProduct(req.body, req.user._id);
        res.redirect('/catalog');
    } catch (err) {
        res.render('create', {
            title: 'Offer Trip',
            body: req.body,
            error: parseError(err)
        });
    }
});

//Details
productController.get('/details/:id', preloader(), async (req, res) => {
    userStates(req, res);
    res.render('details', { title: 'Details Trip' });
});

//Join
productController.get('/details/:id/join', isUser(), preloader(), async (req, res) => {

    try {
        if (res.locals.product.seats < 1) {
            throw new Error('There are no free seats left!')
        }

        if (res.locals.product.buddies.some(x => x._id.toString() == req.user._id.toString())) {
            throw new Error('You already have a seat!');
        }

        await takeSeat(req.params.id, req.user._id);
        res.redirect(`/product/details/${req.params.id}`);
    } catch (err) {
        userStates(req, res);
        res.render('details', {
            title: 'Details Page',
            error: parseError(err)
        });
    }
});

//Delete
productController.get('/details/:id/delete', isUser(), preloader(), isOwner(), async (req, res) => {
    try {
        await deleteProduct(req.params.id);
        res.redirect('/catalog');
    } catch (err) {
        userStates(req, res);
        res.render(`details`, {
            title: 'Details Trip',
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
    res.locals.isOwner = req.user && res.locals.product.owner._id.toString() == req.user._id.toString();
    res.locals.isAlreadyJoined = req.user && res.locals.product.buddies.some(x => x._id.toString() == req.user._id.toString());
    res.locals.isThereFreeSeats = res.locals.product.seats > 0;
    res.locals.product.buddies = res.locals.product.buddies.map(x => x.email).join(', ');
}

module.exports = productController;