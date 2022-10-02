function calculator(number, operator, secondNumber) {

    let printLine = 0;

    switch(operator) {
        case '+':
            printLine = number + secondNumber;
            break;
        case '-':
            printLine = number - secondNumber;
            break;
        case '/':
            printLine = number / secondNumber;
            break;
        case '*':
            printLine = number * secondNumber;
            break;
    }

    console.log(printLine.toFixed(2));

}

calculator(5, '+', 10);