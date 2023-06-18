const Product = require("../models/product");


async function createProduct({ name, years, kind, image, need, location, description }, owner) {

    return Product.create({
        name,
        years,
        kind,
        image,
        need,
        location,
        description,
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

async function donate(animalId, userId) {
    return Product.findByIdAndUpdate(
        { _id: animalId },
        { $push: { donations: userId } },
        { runValidators: true }
    );
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
    donate
}