const Product = require("../models/product");

async function createProduct({ name, age, description, location, image}, owner) {

    return Product.create({
        name,
        age,
        description,
        location,
        image,
        owner
    });
}

async function getAllProducts() {
    return Product.find({}).populate('owner').lean();
}

async function getProductRow(id) {
    return Product.findById(id).populate('owner').populate('commentList.userId');
}

async function getProduct(id) {
    return Product.findById(id).populate('owner').populate('commentList.userId').lean();
}

async function deleteProduct(productId) {
    return Product.findByIdAndDelete(productId);
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductRow,
    getProduct,
    deleteProduct,
}