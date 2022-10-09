function charactersInRange(firstChar, secondChar) {

    let firstCharAsNumber = firstChar.charCodeAt();
    let secondCharAsNumber = secondChar.charCodeAt();

    let beginningOfTheScope = getTheSmalestNumber(firstCharAsNumber, secondCharAsNumber);
    let endOfTheScope = getTheLargestNumber(firstCharAsNumber, secondCharAsNumber);

    let finalPrintLine = '';

    for (let index = beginningOfTheScope + 1; index < endOfTheScope; index++) {

        let charFromAsciiTable = String.fromCharCode(index);
        finalPrintLine += charFromAsciiTable;

        if (index < endOfTheScope - 1) {
        
            finalPrintLine += ' ';
        }
    }

    console.log(finalPrintLine);


    function getTheSmalestNumber(numberOne, numberTwo) {

        let smalestNumber = 0;

        if (numberOne <= numberTwo) {
            smalestNumber = numberOne;
        } else {
            smalestNumber = numberTwo;
        }
        return smalestNumber;
    }

    function getTheLargestNumber(numberOne, numberTwo) {

        let largestNumber = 0;

        if (numberOne >= numberTwo) {
            largestNumber = numberOne;
        } else {
            largestNumber = numberTwo;
        }

        return largestNumber;
    }
}

charactersInRange('#', ':');
charactersInRange('C', '#');