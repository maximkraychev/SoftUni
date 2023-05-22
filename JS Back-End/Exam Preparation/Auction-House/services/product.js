const Product = require("../models/product");

const categories = {
    estate: 'Real Estate',
    vehicles: 'Vehicles',
    furniture: 'Furniture',
    electronics: 'Electronics',
    other: 'Other',
}

async function createProduct({ title, category, imageUrl, price, description }, author) {

    if (isNaN(price)) {
        throw new Error('Price must be a number!');
    }

    category = categories[category];

    return Product.create({
        title,
        category,
        imageUrl,
        price,
        description,
        author
    });
}

async function getAllProducts() {
    return Product.find({}).lean();
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