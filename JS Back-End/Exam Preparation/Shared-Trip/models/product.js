const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    //TODO... requirements 
});

const Product = model('Product', productSchema);

module.exports = Product;