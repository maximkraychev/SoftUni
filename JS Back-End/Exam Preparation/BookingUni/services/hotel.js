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

async function getAllHotels() {
    return Hotel.find({}).sort({freeRooms: -1}).lean();
}

async function getHotelById(id) {
    return Hotel.findById(id).lean();
}

async function getHotelByIdRaw(id) {
    return Hotel.findById(id);
}

async function deleteHotel(id) {
    return Hotel.findByIdAndDelete(id);
}

async function searchBookedHotelByUserId(id) {
    return Hotel.find({bookedUsers: id}, 'name').lean();
}

module.exports = {
    createHotel,
    getAllHotels,
    getHotelById,
    getHotelByIdRaw,
    deleteHotel,
    searchBookedHotelByUserId
}

