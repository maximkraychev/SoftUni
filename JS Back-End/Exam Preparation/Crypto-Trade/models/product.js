const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    name: { type: String, required: [true, 'Name is required!'], minLength: [2, 'The Name should be at least two characters long!'] },
    image: { type: String, required: [true, 'Image is required!'], validate: [/^https?:\/\//, 'The Crypto Image should start with http:// or https://'] },
    price: { type: Number, required: [true, 'Price is required!'], min: [1, 'The Price should be a positive number!'] },
    description: { type: String, required: [true, 'Description is required!'], minLength: [10, 'The Description should be a minimum of 10 characters long'] },
    payment: {
        type: String,
        enum: {
            values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
            message: 'The Payment Method must be one of the options'
        },
        required: [true, 'Payment is required!']
    },
    buyCrypto: { type: [Types.ObjectId], default: [] },
    owner: { type: String, required: true }
});

const Product = model('Product', productSchema);

module.exports = Product;