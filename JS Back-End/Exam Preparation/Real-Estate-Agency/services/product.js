const Product = require("../models/product");

async function createProduct({ name, type, year, city, homeImage, propertyDescription, availablePieces }, owner) {

    return Product.create({
        name,
        type,
        year,
        city,
        homeImage,
        propertyDescription,
        availablePieces,
        owner
    });
}

async function getAllProducts() {
    return Product.find({}).lean();
}

async function getProductRow(id) {
    return Product.findById(id).populate('rentedHome');
}

async function getProduct(id) {
    return Product.findById(id).populate('rentedHome').lean();
}

async function deleteProduct(id) {
    return Product.findByIdAndDelete(id);
}

//TODO... Chnage the properties for destructuring
//TODO... Chnage the search
async function findProductBySearch({ search, platform }) {
    const games = await Product
        .find({
            name: { $regex: search, $options: 'i' },
            platform: { $regex: platform, $options: 'i' }
        })
        .lean();
    return games;
}

async function rendHouse(houseId, userId) {
    return Product.findByIdAndUpdate(
        { _id: houseId },
        {
            $push: { rentedHome: userId },
            $inc: { availablePieces: -1 }
        });
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductRow,
    getProduct,
    deleteProduct,
    findProductBySearch,
    rendHouse
}