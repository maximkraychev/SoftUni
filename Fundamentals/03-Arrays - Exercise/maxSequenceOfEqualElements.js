function maxSequenceOfEqualElements(array) {

    let arrayLength = array.length;

    let currentMaxSequence = 1;
    let currentMaxDgitNumber = 0;

    let longestMaxSequenceNumber = 0;
    let longestMaxDigitNumber = 0;

    if (arrayLength === 1) {
        longestMaxSequenceNumber = 1;
        longestMaxDigitNumber = array[0];
    }

    for (let i = 0; i < arrayLength - 1; i++) {
        let currentDigit = array[i];
        let nextDigit = array[i + 1];

        if (currentDigit === nextDigit) {
            currentMaxSequence++;
            currentMaxDgitNumber = currentDigit;
        }

        if (currentDigit !== nextDigit) {
            currentMaxSequence = 1;
            currentMaxDgitNumber = currentDigit;
        }

        if (currentMaxSequence > longestMaxSequenceNumber) {
            longestMaxSequenceNumber = currentMaxSequence;
            longestMaxDigitNumber = currentMaxDgitNumber;
        }
    }

    let printLine = '';

    for (let i = 0; i < longestMaxSequenceNumber; i++) {
        printLine += longestMaxDigitNumber;

        if (i < longestMaxSequenceNumber - 1) {
            printLine += ' ';
        }
    }

    console.log(printLine);
}



maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([7]);