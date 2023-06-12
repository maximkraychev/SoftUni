const Product = require("../models/product");

async function createProduct({ headline, location, companyName, companyDescription }, author) {

    return Product.create({
        headline,
        location,
        companyName,
        companyDescription,
        author
    });
}

async function getAllProducts() {
    return Product.find({}).lean();
}

async function getProductRow(id) {
    return Product.findById(id).populate('author').populate('usersApplied');
}

async function getProduct(id) {
    return Product.findById(id).populate('author').populate('usersApplied').lean();
}

async function deleteProduct(id) {
    return Product.findByIdAndDelete(id);
}

async function findFirstThree() {
    return Product.find().sort({_id: 1}).limit(3).lean();
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
    findFirstThree
}