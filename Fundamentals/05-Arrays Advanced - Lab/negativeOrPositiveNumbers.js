function negativeOrPositiveNumbers(array) {
    let number = [];
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {

        if (array[index] < 0) {
            number.unshift(Number(array[index]));
        } else {
            number.push(Number(array[index]));
        }
    }

    for (let element of number) {
        console.log(element);
    }

}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);