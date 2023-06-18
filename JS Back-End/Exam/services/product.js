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

async function getLastThreeAdded() {
    return Product.find({}).sort({ _id: -1 }).limit(3).lean();
}

async function getBySearch(search) {
    return await Product
        .find({
            location: { $regex: search, $options: 'i' }
        })
        .lean();

}

module.exports = {
    createProduct,
    getAllProducts,
    getProductRow,
    getProduct,
    deleteProduct,
    donate,
    getLastThreeAdded,
    getBySearch
}