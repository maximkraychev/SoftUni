const { Schema, model, Types } = require('mongoose');

const hotelSchema = new Schema({
    name: { type: String, minlength: [4, 'Hotel name must be at least 4 characters long!'] },
    city: { type: String, minlength: [3, 'City must be at least 3 characters long!'] },
    imgUrl: { type: String, validate: [/^https?:\/\/.+/i, 'The Image should starts with http or https'] },
    freeRooms: { type: Number, require: true, min: [1, 'Free Rooms must be at least 1!'], max: [100, 'Free Rooms can\'t exceed more then 100!'] },
    bookedUsers: { type: [Types.ObjectId], default: [] },
    owner: { type: String, require: true }
});

hotelSchema.index(
    { name: 1 },
    {
        unique: true,
        collation: {
            locale: 'en',
            strength: 2
        }
    });

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;