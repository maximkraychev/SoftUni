function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result = 0;

    switch(operator) {
        case "+":
        case "-":
        case "*":
            let evenOrOdd
            if(operator === "+") {
                result = n1 + n2;
            } else if(operator === "-") {
                result = n1 - n2;
            } else if(operator === "*") {
                result = n1 * n2;
            }

            if(result % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
            break;
        case "/":
        case "%":
            if(n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else if(operator === "/") {
                result = n1 / n2;
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            } else if(operator === "%") {
                result = n1 % n2;
                console.log(`${n1} % ${n2} = ${result}`);
            }
            break;
    }
    
}

operationsBetweenNumbers(["10",
"0",
"%"])






