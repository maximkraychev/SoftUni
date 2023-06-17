const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [6, 'The Name should be at least 6 characters']
    },
    type: {
        type: String,
        required: [true, 'Type is required!'],
        enum: ['Apartment', 'Villa', 'House']
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
        min: [1850, 'The Year should be between 1850 and 2021'],
        max: [2021, 'The Year should be between 1850 and 2021']
    },
    city: {
        type: String,
        required: [true, 'City is required!'],
        minLength: [4, 'The City should be at least 4 characters long']
    },
    homeImage: {
        type: String,
        required: [true, 'Home Image is required!'],
        match: [/^https?:\/\//i, 'The Home Image should starts with http:// or https://']
    },
    propertyDescription: {
        type: String,
        required: [true, 'Property Description is required!'],
        maxLength: [60, 'The Property Description should be a maximum of 60 characters long']
    },
    availablePieces: {
        type: Number,
        required: [true, 'Available pieces is required!'],
        min: [0, 'The Available Pieces should be positive number (from 0 to 10)'],
        max: [10, 'The Available Pieces should be positive number (from 0 to 10)']
    },
    rentedHome: {
        type: [Types.ObjectId],
        ref: 'User',
        default: []
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'Owner is required!']
    }
});

const Product = model('Product', productSchema);

module.exports = Product;