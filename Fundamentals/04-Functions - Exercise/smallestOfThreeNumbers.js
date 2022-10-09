function smallestOfThreeNumbers(numOne, numTwo, numThree) {

    let getSmallestNumber = (firstNumber, secondNumber) => {
        let smalestNumber = 0;

        if (firstNumber <= secondNumber) {
            smalestNumber = firstNumber;
        } else {
            smalestNumber = secondNumber;
        }
        return smalestNumber;
    }

    let theSmalestNumber = getSmallestNumber(getSmallestNumber(numOne, numTwo), numThree);

    console.log(theSmalestNumber);
}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4)
smallestOfThreeNumbers(2, 2, 2);