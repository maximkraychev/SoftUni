function processOddNumbers(array) {

    let finalArray = array
        .filter((_, x) => x % 2 !== 0)
        .map(x => x * 2)
        .reverse()

    console.log(finalArray.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);