function factorialDivision(firstNumber, lastNumber) {

    let getFactorialNumber = (number) => {

        if (number === 0) {
            return 0;
        }

        let factorialNumber = 1;

        for (let i = 1; i <= number; i++) {
            factorialNumber *= i;
        }

        return factorialNumber;
    }

    let dividedResultFromTheFactorialsNumbers = getFactorialNumber(firstNumber) / getFactorialNumber(lastNumber);

    console.log(dividedResultFromTheFactorialsNumbers.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
factorialDivision(0, 0);