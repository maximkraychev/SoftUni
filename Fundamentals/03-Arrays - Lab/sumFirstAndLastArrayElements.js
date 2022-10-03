function sumFirstAndLastArrayElements(arr) {

    let firstNumber = Number(arr[0]);
    let lastNumber = Number(arr[arr.length - 1]);

    console.log(firstNumber + lastNumber);

}

sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);