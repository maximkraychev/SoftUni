const productController = require('express').Router();
const preloader = require('../middlewares/preloader');
const stopAccesToClosedOffers = require('../middlewares/stopAccesToClosedOffers');
const parseError = require('../utils/parsers');
const { isOwner, isUser } = require('../middlewares/guards');
const { createProduct, deleteProduct } = require('../services/product');
const { categoryParser } = require('../utils/categoryParser');

//Create

productController.get('/create', isUser(), async (req, res) => {
    res.render('create', { title: 'Publish Auction' });
});

productController.post('/create', isUser(), async (req, res) => {
    try {
        await createProduct(req.body, req.user._id);
        res.redirect('/catalog');
    } catch (err) {
        res.render('create', {
            title: 'Publish Auction',
            body: req.body,
            error: parseError(err)
        });
    }
});

//Details
productController.get('/details/:id', preloader(), stopAccesToClosedOffers(), async (req, res) => {
    const template = detailsTemplate(req, res);
    res.render(template, { title: 'Auction Details' });
});

//Bid
productController.post('/details/:id/bid', isUser(), preloader(true), stopAccesToClosedOffers(), async (req, res) => {
    try {
        if(req.user._id.toString() == res.locals.product.author._id.toString()) {
            throw new Error('You are the author of this offer and cannot bid on it!')
        }

        if (req.body.bidPrice < res.locals.product.price) {
            throw new Error('The bid price must be larger then the current price!')
        }

        res.locals.product.price = req.body.bidPrice;
        res.locals.product.bidder = req.user._id;
        await res.locals.product.save();
        res.redirect(`/product/details/${req.params.id}`);
    } catch (err) {
        const template = detailsTemplate(req, res);
        res.locals.product = res.locals.product.toObject();
        res.render(template, {
            title: 'Details Page',
            error: parseError(err)
        });
    }
});

//Delete
productController.get('/details/:id/delete', isUser(), preloader(), stopAccesToClosedOffers(), isOwner(), async (req, res) => {
    try {
        await deleteProduct(req.params.id);
        res.redirect('/catalog');
    } catch (err) {
        const template = detailsTemplate(req, res);
        res.render(template, {
            title: 'Details Page',
            error: parseError(err)
        });
    }
});

//Edit
productController.get('/details/:id/edit', isUser(), preloader(), stopAccesToClosedOffers(), isOwner(), (req, res) => {
    res.render('edit', {
        title: 'Edit Auction',
    })
});

productController.post('/details/:id/edit', isUser(), preloader(true), stopAccesToClosedOffers(), isOwner(), async (req, res) => {
    try {

        const product = res.locals.product;
        product.title = req.body.title;
        product.description = req.body.description;
        product.category = categoryParser(req.body.category);
        product.imageUrl = req.body.imageUrl;
        if (!product.bidder) {
            product.price = req.body.price;
        }
         
        await product.save();
        res.redirect(`/product/details/${req.params.id}`);
    } catch (err) {
        res.locals.product = res.locals.product.toObject();
        res.render('edit', {
            title: 'Edit Auction',
            error: parseError(err)
        });
    }
});

productController.get('/details/:id/closed', isUser(), preloader(true), stopAccesToClosedOffers(), isOwner(), (req ,res) =>{
    try {
        res.locals.product.closed = true;
        res.locals.product.save();
        res.redirect('/closedAuctions');
    } catch(err) {
        res.locals.product = res.locals.product.toObject();
        const template = detailsTemplate(req, res);
        res.render(template, {
            title: 'Details Page',
            error: parseError(err)
        });
    }
    
});

function detailsTemplate(req, res) {
    if (req.user && req.user._id.toString() == res.locals.product.author._id.toString()) {
        return 'details-owner';
    } else {
        res.locals.currentBidder = req.user && (res.locals.product.bidder?._id.toString() == req.user._id.toString());
        return 'details';
    }
}

module.exports = productController;