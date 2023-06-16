const { Schema, model, Types } = require('mongoose');

const productSchema = new Schema({
    startPoin: { type: String, required: [true, 'Start Point is required'], minLength: [4, 'The Starting Point should be at least 4 characters long'] },
    endPoint: { type: String, required: true, minLength: [4, 'The End Point should be at least 4 characters long'] },
    date: { type: String, required: [true, 'Date is required'] },
    time: { type: String, required: [true, 'Time is required'] },
    carImage: { type: String, required: true, match: [/^https?:\/\//, 'The Car Image should be starts with http:// or https://'] },
    carBrand: { type: String, required: true, minLength: [4, 'The Car Brand should be minimum 4 characters long'] },
    seats: { type: Number, required: true, min: [0, 'The Seats should be positive number'], max: [4, 'The Seats may be maximum 4'] },
    price: { type: Number, required: true, min: [1, 'The Price should be positive number'], max: [50, 'The price can be maximum 50'] },
    description: { type: String, required: true, minLength: [10, 'The Description should be minimum 10 characters long'] },
    owner: { type: Types.ObjectId, ref: 'User', required: true },
    buddies: { type: [Types.ObjectId], ref: 'User', default: [] }

});

const Product = model('Product', productSchema);

module.exports = Product;