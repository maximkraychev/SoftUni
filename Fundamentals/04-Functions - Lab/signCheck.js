function signCheck(numOne, numTwo, numThree) {

    let finalResult = check(check(numOne, numTwo), numThree)

    function check(firstNumber, secondNumber) {

        let result = 0;

        if (firstNumber < 0 && secondNumber < 0) {
            result = 1;
        } else if (firstNumber > 0 && secondNumber < 0) {
            result = -1;
        } else if (firstNumber < 0 && secondNumber > 0) {
            result = -1;
        } else if (firstNumber > 0 && secondNumber > 0) {
            result = 1;
        }

        return result
    }

    if (numOne === 0 || numTwo === 0 || numThree === 0) {
        console.log('0');
    } else if (finalResult > 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }

}

signCheck(5, 0, -1);