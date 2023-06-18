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
//TODO... Change: (Path), (Guards), (name of the Template), (Title)
productController.get('/details/:id', preloader(), async (req, res) => {
    res.render('details', { title: ''});
});

//Buy
//For example if needed!!!!
// productController.get('/details/:id/buy', isUser(), preloader(true), async (req, res) => {
//     res.locals.game.boughtBy
//         .push(req.user._id)

//     await res.locals.game.save();
//     userStates(req, res);
//     res.locals.game = res.locals.game.toObject();
//     res.render('details', { title: 'Details Page', });
// });

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
    res.locals.isOwner = res.locals.product.owner.toString() == req.user._id.toString();
    //TODO... Chnage the path to the array if you need that part
    //res.locals.isAlredyBought = res.locals.product.(CHANGE ME).some(x => x.toString() == req.user._id.toString());
}

module.exports = productController;