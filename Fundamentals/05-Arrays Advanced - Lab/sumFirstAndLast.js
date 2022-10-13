function sumFirstAndLast(array) {

    let firstNumber = Number(array[0]);
    let lastNumber = Number(array.pop());

    console.log(firstNumber + lastNumber);

}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);
