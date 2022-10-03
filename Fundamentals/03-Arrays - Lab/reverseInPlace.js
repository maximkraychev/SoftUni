function reverseInPlace(inputArray) {

    for (let i = 0; i < inputArray.length / 2; i++) {

        let charHolder = inputArray[inputArray.length - 1 - i];

        inputArray[inputArray.length - 1 - i] = inputArray[i];
        inputArray[i] = charHolder;

        charHolder = '';
    }

    let printLine = '';

    for (let i = 0; i < inputArray.length; i++) {
        printLine += inputArray[i];

        if (i < inputArray.length - 1) {
            printLine += ' ';
        }
    }
    console.log(printLine);

}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);