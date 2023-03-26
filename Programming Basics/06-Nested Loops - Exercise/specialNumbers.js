function specialNumbers(input) {

    let number = Number(input[0]);
    let print = "";

    for(let i = 1111; i <= 9999; i++) {
        let iToString = i.toString();
        let firstNumber = iToString[0];
        let secondNumber = iToString[1];
        let thirdNumber = iToString[2];
        let forthNumber = iToString[3];

        if(number % firstNumber === 0 && number % secondNumber === 0 && number % thirdNumber === 0 && number % forthNumber === 0) {
            print += `${i} `;
        }
    }

    console.log(print);
    
}

specialNumbers(["3"])