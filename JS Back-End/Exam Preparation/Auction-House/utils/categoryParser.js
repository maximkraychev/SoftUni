const categories = {
    estate: 'Real Estate',
    vehicles: 'Vehicles',
    furniture: 'Furniture',
    electronics: 'Electronics',
    other: 'Other',
}

function categoryParser(category) {
    return categories[category];
}

module.exports = {
    categoryParser
}