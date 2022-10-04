function maxNumber(array) {

    let arrayLength = array.length;
    let printLine = '';

    for (let i = 0; i < arrayLength; i++) {
        let currentDigit = array[i];
        let isTopInteger = true;

        for (let j = i + 1; j < arrayLength; j++) {
            if (currentDigit <= array[j]) {
                isTopInteger = false;
            }
        }

        if (isTopInteger) {
            if (printLine !== '') {
                printLine += ' ';
            }
            printLine += currentDigit;
        }

    }

    console.log(printLine);
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);