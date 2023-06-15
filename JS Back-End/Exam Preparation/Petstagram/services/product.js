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