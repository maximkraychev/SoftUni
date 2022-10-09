function addAndSubtract(firstNumber, secondNumber, thirdNumber) {

    let addAndSubtractFinalResult = getSubtractionOfTwoDigits(getSumOfTwoDigits(firstNumber, secondNumber), thirdNumber);

    console.log(addAndSubtractFinalResult);

    function getSubtractionOfTwoDigits(firstDigit, secondDigit) {

        let finalSubtraction = firstDigit - secondDigit;
        return finalSubtraction;
    }

    function getSumOfTwoDigits(firstDigit, secondDigit) {

        let finalSum = firstDigit + secondDigit;
        return finalSum;
    }
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);