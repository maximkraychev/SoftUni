const Hotel = require("../models/hotel");

async function createHotel({ name, city, freeRooms, imgUrl }, owner) {

    const existingName = await Hotel.findOne({ name }).collation({ locale: 'en', strength: 2 });
    if (existingName) {
        throw new Error('Hotel name is already taken!');
    }

    return Hotel.create({
        name,
        city,
        freeRooms,
        imgUrl,
        owner
    });
};

module.exports = {
    createHotel,
}

