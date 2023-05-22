const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    title: { type: String, minLength: [4, 'The title should be a minimum of 4 characters long'] },
    description: { type: String, maxLength: [200, 'The description should be a maximum of 200 characters long'] },
    category: {
        type: String,
        enum: {
            values: ['Vehicles', 'Real Estate', 'Electronics', 'Furniture', 'Other'],
            message: 'The category should be one of the following: Vehicles, Real Estate, Electronics, Furniture, Other'
        },
        required: true
    },
    imageUrl: { type: String },
    price: { type: Number, required: [true, 'Price is required!'], min: [0, 'The price cannot be negative'] },
    author: { type: Types.ObjectId, ref: 'User', required: true },
    bidder: { type: Types.ObjectId, ref: 'User' },
    closed: {type: Boolean, default: false},
});

const Product = model('Product', productSchema);

module.exports = Product;