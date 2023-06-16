const Product = require("../models/product");


async function createProduct({ startPoint, endPoint, date, time, carImage, carBrand, seats, price, description }, owner) {
    return Product.create({
        startPoint,
        endPoint,
        date,
        time,
        carImage,
        carBrand,
        seats,
        price,
        description,
        owner
    });
}

async function getAllProducts() {
    return Product.find({}).lean();
}

async function getProductRow(id) {
    return Product.findById(id).populate('owner buddies');
}

async function getProduct(id) {
    return Product.findById(id).populate('owner buddies').lean();
}

async function deleteProduct(id) {
    return Product.findByIdAndDelete(id);
}

async function takeSeat(productId, userId) {
    return Product.findOneAndUpdate(
        { _id: productId },
        {
            $inc: {
                seats: -1
            },
            $push: {
                buddies: userId
            }
        });
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

module.exports = {
    createProduct,
    getAllProducts,
    getProductRow,
    getProduct,
    deleteProduct,
    findProductBySearch,
    takeSeat
}