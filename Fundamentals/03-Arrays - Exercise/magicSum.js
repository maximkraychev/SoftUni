function magicSum(array, uniqueNumber) {

    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = array[i];

        for (let j = 1 + i; j < arrayLength; j++) {
            let nextNumber = array[j];
            if (currentNumber + nextNumber === uniqueNumber) {
                console.log(`${currentNumber} ${nextNumber}`);
            }
        }
    }

}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
magicSum([1, 2, 3, 4, 5, 6], 6)
