function evenAndOddSubtraction(inputArray) {

    let even = 0;
    let odd = 0;

    for (let i = 0; i < inputArray.length; i++) {

        inputArray[i] = Number(inputArray[i])

        if (inputArray[i] % 2 === 0) {
            even += inputArray[i];
        } else {
            odd += inputArray[i];
        }

    }

    let difference = even - odd;
    console.log(difference);

}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);
