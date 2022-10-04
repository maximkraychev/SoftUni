function mergeArrays(arrOne, arrTwo) {

    let sumArray = [];
    let arrOneLength = arrOne.length;

    for (let i = 0; i < arrOneLength; i++) {
        if (i % 2 === 0) {
            sumArray.push(Number(arrOne[i]) + Number(arrTwo[i]));
        } else {
            sumArray.push((arrOne[i]) + (arrTwo[i]))
        }
    }


    // Without .join();

    let sumArrayToString = '';
    let sumArrayLength = sumArray.length;
    for (let i = 0; i < sumArrayLength; i++) {

        sumArrayToString += sumArray[i]

        if (i < sumArrayLength - 1) {
            sumArrayToString += ' - ';
        }
    }

    console.log(sumArrayToString);

}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);