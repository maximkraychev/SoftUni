const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    title: {type: String, require: true},
    author: {type: String, require: true},
    image: {type: String, require: true},
    bookReview: {type: String, require: true},
    genre: {type: String, require: true},
    stars: {type: Number, require: true, min: [1, 'The minimum stars is one!'], max:[5, 'The maximum stars is five!']},
    wishingList: {type: [Types.ObjectId], default: []},
    owner: {type: Types.ObjectId, require: true} 
});

const Product = model('Product', productSchema);

module.exports = Product;