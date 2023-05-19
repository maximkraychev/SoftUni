const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    name: { type: String, required: true, minLength: [2, 'The Name should be at least two characters long!'] },
    image: { type: String, required: true, min: [1, 'The Price should be a positive number!'] },
    price: { type: Number, required: true, validate: [/^https?:\/\//, 'The Crypto Image should start with http:// or https://'] },
    description: { type: String, required: true, minLength: [10, 'The Description should be a minimum of 10 characters long'] },
    paymentMethod: {
        type: String,
        enum: {
            values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
            message: 'The Payment Method must be one of the options'
        },
        required: true
    },
    buyCrypto: { type: [Types.ObjectId], default: [] },
    owner: { type: String, required: true }
});

const Product = model('Product', productSchema);

module.exports = Product;