const Product = require("../models/product");

//TODO... Chnage the properties for destructuring;
async function createProduct({ name }, owner) {

    return Product.create({
        name,
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
    findProductBySearch
}