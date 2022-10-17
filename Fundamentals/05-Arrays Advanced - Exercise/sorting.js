function sorting(array) {

    let sortedArray = array.slice(0).sort((a, b) => a - b);
    let finalArray = []

    while (sortedArray.length > 0) {

        finalArray.push(sortedArray.pop());
        finalArray.push(sortedArray.shift());

    }

    console.log(finalArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);