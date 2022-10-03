function reverseAnArrayOfNumbers(number, arr) {

    let reverseArray = [];
    let printLine = '';

    for (let i = 0; i < number; i++) {
        reverseArray[i] = arr[number - 1 - i]
    }


    for (let i = 0; i < reverseArray.length; i++) {
        if (i < reverseArray.length - 1) {
            printLine += `${reverseArray[i]} `
        } else {
            printLine += `${reverseArray[i]}`
        }
    }

    console.log(printLine);

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);