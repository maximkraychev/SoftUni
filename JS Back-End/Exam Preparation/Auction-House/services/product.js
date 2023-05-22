const Product = require("../models/product");
const { categoryParser } = require("../utils/categoryParser");

async function createProduct({ title, category, imageUrl, price, description }, author) {

    if (isNaN(price)) {
        throw new Error('Price must be a number!');
    }

    category = categoryParser(category);

    return Product.create({
        title,
        category,
        imageUrl,
        price,
        description,
        author
    });
}

async function getAllActiveProducts() {
    return Product.find({ closed: false }).lean();
}

async function getProductRow(id) {
    return Product.findById(id).populate('author').populate('bidder');
}

async function getProduct(id) {
    return Product.findById(id).populate('author').populate('bidder').lean();
}

async function deleteProduct(id) {
    return Product.findByIdAndDelete(id);
}

async function getAllClosedProductByUserId(id) {
    return Product.find({
        closed: true,
        author: id
    }).populate('bidder').lean();
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
    getAllActiveProducts,
    getProductRow,
    getProduct,
    deleteProduct,
    findProductBySearch,
    getAllClosedProductByUserId
}