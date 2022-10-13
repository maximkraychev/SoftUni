function listOfProducts(array) {

    let sortedArray = array.sort();

    let toStringNumberetAndSortedArray = sortedArray
        .map((el, index) => `${index + 1}.` + el)
        .join('\n')

    console.log(toStringNumberetAndSortedArray);
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts([]);