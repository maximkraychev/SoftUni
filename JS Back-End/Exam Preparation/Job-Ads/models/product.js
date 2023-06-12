const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    headline: {type: String, required: [true, 'Headline is required'], minLength: [4, 'The Headline should be a minimum of 4 characters long!']}, 
    location: {type: String, required: [true, 'Location is required'], minLength: [8, 'The Location should be a minimum of 8 characters long!']}, 
    companyName: {type: String, required: [true, 'Company Name is required'], minLength: [3, 'The Company name should be at least 3 characters!']}, 
    companyDescription : {type: String, required: [true, 'Company Description is required'], maxLength: [40, 'The Company description should be a maximum of 40 characters long!']}, 
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