const Product = require("../models/product");

async function createProduct({ title, author, image, bookReview, genre, stars }, owner) {

    return Product.create({
        title,
        author,
        image,
        bookReview,
        genre,
        stars,
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

async function findWishedProductsByUser(id) {
    const products = await Product
        .find({
            wishingList: {$in: [id]}
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
    findWishedProductsByUser
}