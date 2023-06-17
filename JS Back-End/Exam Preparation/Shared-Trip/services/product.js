const Product = require("../models/product");
const User = require("../models/user");


async function createProduct({ startPoint, endPoint, date, time, carImage, carBrand, seats, price, description }, owner) {
    const newProduct = await Product.create({
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

    await User.updateOne({ _id: owner }, { $push: { tripsHistory: newProduct._id } });
    return newProduct;
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

async function deleteProduct(productId, userId) {
   return Promise.all([Product.findByIdAndDelete(productId), User.findOneAndUpdate({ _id: userId }, { $pull: { tripsHistory: productId } })]);
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

module.exports = {
    createProduct,
    getAllProducts,
    getProductRow,
    getProduct,
    deleteProduct,
    findProductBySearch,
    takeSeat
}