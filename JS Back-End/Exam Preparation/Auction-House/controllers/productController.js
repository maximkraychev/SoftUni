const productController = require('express').Router();
const { isOwner, isUser } = require('../middlewares/guards');
const preloader = require('../middlewares/preloader');
const { createProduct, deleteProduct } = require('../services/product');
const parseError = require('../utils/parsers');

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

productController.get('/details/:id', preloader(), async (req, res) => {
    console.log(res.locals.product);
    const template = detailsTemplate(req, res);
    res.render(template, { title: 'Auction Details' });
});

//Bid
productController.post('/details/:id/bid', isUser(), preloader(true), async (req, res) => {
    try {
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
    res.locals.currentBidder = res.locals.product.bidder?.toString() == req.user._id.toString();
}

function detailsTemplate(req, res) {
    if (req.user && req.user._id.toString() == res.locals.product.author._id.toString()) {
        return 'details-owner';
    } else {
        res.locals.currentBidder = req.user && (res.locals.product.bidder?._id.toString() == req.user._id.toString());
        return 'details';
    }
}

module.exports = productController;