const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least two characters long!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/https?:\/\//, 'The photo image should start with http:// or https://']
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [1, 'Age should be between 1 and 100'],
        max: [100, 'Age should be between 1 and 100']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [5, 'Description should have length between 5 and 50 characters'],
        maxLength: [50, 'Description should have length between 5 and 50 characters']
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        minLength: [5, 'Description should have length between 5 and 50 characters'],
        maxLength: [50, 'Description should have length between 5 and 50 characters']
    },
    commentList: {
        type: [{
            userId: { type: Types.ObjectId },
            comments: { type: String }
        }],
        ref: 'User',
        default: []
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Product = model('Product', productSchema);

module.exports = Product;