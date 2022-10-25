function printNthElement(input) {

    let step = Number(input.pop());
    let finalArray = [];

    for(let i = 0; i < input.length; i+= step) {
        finalArray.push(input[i]);
    }

    console.log(finalArray.join(' '));

}

printNthElement(['5', '20', '31', '4', '20', '2'])