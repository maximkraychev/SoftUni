const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    title: {type: String, required: [true, 'Title is required!'], minLength: [2, 'The Title should be at least 2 characters!']},
    author: {type: String, required: [true, 'Author is required!'], minLength: [5, 'The Author should be at least 5 characters!']},
    image: {type: String, required: [true, 'Image is required!'], validate: [/^https?:\/\//i, 'The Image should start with http:// or https://']},
    bookReview: {type: String, required: [true, 'Review is required!'], minLength: [10, 'The Review should be a minimum of 10 characters long!']},
    genre: {type: String, required: [true, 'Genre is required!'], minLength: [3, 'The Genre should be at least 3 characters!']},
    stars: {type: Number, required: [true, 'Stars is required!'], min: [1, 'The Stars should be a positive number between 1 and 5!'], max:[5, 'The Stars should be a positive number between 1 and 5!']},
    wishingList: {type: [Types.ObjectId], default: []},
    owner: {type: Types.ObjectId, require: true} 
});

const Product = model('Product', productSchema);

module.exports = Product;