function searchForaNumber(array, manipulations) {

    let theElementsWehaveToTake = manipulations[0];
    let theElementsToDelete = manipulations[1];
    let theNumberWeSearch = manipulations[2];
    let count = 0

    // We take the firsts elements (theElementsWehaveToTake)
    let manipulatedArray = array.slice(0, theElementsWehaveToTake)

    // We delete the firsts elements (theElementsToDelete)
    manipulatedArray.splice(0, theElementsToDelete);

    // Searching for the number (theNumberWeSearch)
    manipulatedArray.forEach(el => {
        if (el === theNumberWeSearch) {
            count++
        }
    })

    console.log(`Number ${theNumberWeSearch} occurs ${count} times.`);
}

searchForaNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForaNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);