const Product = require("../models/product");
const User = require("../models/user");

async function createProduct({ headline, location, companyName, companyDescription }, author) {

    const product = await Product.create({
        headline,
        location,
        companyName,
        companyDescription,
        author
    });

    const user = await User.findById(author);
    user.myAds.push(product._id);
    await user.save();
    return product;
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

async function deleteProduct(userId, adId) {
    await User.updateOne({ _id: userId }, { $pull: { myAds: adId } });
    await Product.findByIdAndDelete(adId);
}

async function findFirstThree() {
    return Product.find().sort({ _id: 1 }).limit(3).lean();
}

async function findProductBySearch({ search }) {
    const ads = User
        .findOne({ email: { $regex: search, $options: 'i' } })
        .populate('myAds', ['headline', 'companyName']) 
        .lean();
    return ads;
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