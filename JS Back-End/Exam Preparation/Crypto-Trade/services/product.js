const Product = require("../models/product");

async function createProduct({ name, image, price, description, payment }, owner) {

    if (isNaN(price)) {
        throw new Error('Price should be a positive number!');
    }

    return Product.create({
        name,
        image,
        price,
        description,
        payment,
        owner
    });
}

async function getAllProducts() {
    return Product.find({}).lean();
}

async function getProductRow(id) {
    return Product.findById(id);
}

async function getProduct(id) {
    return Product.findById(id).lean();
}

async function deleteProduct(id) {
    return Product.findByIdAndDelete(id);
}

async function findProductBySearch({ search, payment }) {
    const products = await Product
        .find({
            name: { $regex: search, $options: 'i' },
            payment: { $regex: payment, $options: 'i' }
        })
        .lean();
    return products;
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductRow,
    getProduct,
    deleteProduct,
    findProductBySearch
}