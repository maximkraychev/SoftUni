function simpleCalculator(numOne, numTwo, operator) {

    let multiply = (numberOne, numberTwo) => {
        return numberOne * numberTwo;
    }

    let divide = (numberOne, numberTwo) => {
        return numberOne / numberTwo;
    }

    let add = (numberOne, numberTwo) => {
        return numberOne + numberTwo;
    }

    let subtract = (numberOne, numberTwo) => {
        return numberOne - numberTwo;
    }

    let result = 0;

    switch (operator) {
        case 'multiply': result = multiply(numOne, numTwo); break;
        case 'divide': result = divide(numOne, numTwo); break;
        case 'add': result = add(numOne, numTwo); break;
        case 'subtract': result = subtract(numOne, numTwo); break;
    }

    return result;
}

simpleCalculator(5, 5, 'multiply');