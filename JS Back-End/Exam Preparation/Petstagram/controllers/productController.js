const productController = require('express').Router();
const { isOwner, isUser, notOwner } = require('../middlewares/guards');
const preloader = require('../middlewares/preloader');
const { createProduct, deleteProduct } = require('../services/product');
const { getUserById } = require('../services/user');
const parseError = require('../utils/parsers');

//Create
productController.get('/create', isUser(), async (req, res) => {
    res.render('create');
});


productController.post('/create', isUser(), async (req, res) => {
    try {
        const [photo, user] = await Promise.all([createProduct(req.body, req.user._id), getUserById(req.user._id)]);
        user.uploadedPhoto.push(photo._id);
        await user.save();
        res.redirect('/catalog');
    } catch (err) {
        res.render('create', {
            body: req.body,
            error: parseError(err)
        });
    }
});

//Details
productController.get('/details/:id', preloader(), async (req, res) => {
    userStates(req, res);
    res.render('details');
});

//Comment
productController.post('/details/:id/comment', isUser(), preloader(true), notOwner(), async (req, res) => {
    try {
        res.locals.product.commentList
            .push({
                userId: req.user._id,
                comment: req.body.comment
            })

        await res.locals.product.save();
        res.redirect(`/product/details/${req.params.id}`);
    } catch (err) {
        res.locals.product.commentList.pop();
        userStates(req, res);
        res.locals.product = res.locals.product.toObject();
        res.render('details', { error: parseError(err) });
    }
});

//Delete
productController.get('/details/:id/delete', isUser(), preloader(), isOwner(), async (req, res) => {
    try {
        const [deletedPhoto, user] = await Promise.all([deleteProduct(req.params.id), getUserById(req.user._id)]);
        const indexOfPhoto = user.uploadedPhoto.findIndex(x => x.toString() == deletedPhoto._id.toString());
        if (Number.isInteger(indexOfPhoto)) {
            user.uploadedPhoto.splice(indexOfPhoto, 1);
            await user.save();
        } else {
            throw new Error('Deleted photo is missing in profile photos')
        }
        res.redirect('/catalog');
    } catch (err) {
        userStates(req, res);
        res.render('details', {
            error: parseError(err)
        });
    }
});

//Edit
productController.get('/details/:id/edit', isUser(), preloader(), isOwner(), (req, res) => {
    res.render('edit');
});

productController.post('/details/:id/edit', isUser(), preloader(true), isOwner(), async (req, res) => {
    try {
        const product = res.locals.product;
        product.name = req.body.name;
        product.age = req.body.age;
        product.description = req.body.description;
        product.location = req.body.location;
        product.image = req.body.image;
        await product.save();
        res.redirect(`/product/details/${req.params.id}`);
    } catch (err) {
        res.locals.product = res.locals.product.toObject();
        res.render('edit', {
            body: res.locals.product,
            error: parseError(err)
        });
    }
});

// User State for locals if needed;
function userStates(req, res) {
    res.locals.isOwner = req.user && res.locals.product.owner._id.toString() == req.user._id.toString();
    res.locals.canComment = (req.user && !res.locals.isOwner);
}

module.exports = productController;