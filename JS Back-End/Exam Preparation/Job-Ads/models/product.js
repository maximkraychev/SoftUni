const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    headline: {type: String, required: true}, 
    location: {type: String, required: true}, 
    companyName: {type: String, required: true}, 
    companyDescription : {type: String, required: true}, 
    author: {type: Types.ObjectId, ref: 'User', required: true}, 
    usersApplied: {type: [Types.ObjectId], ref: 'User', default: []}, 
});

//TODO chek if it works with ObjectId
productSchema.index({author: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const Product = model('Product', productSchema);

module.exports = Product;