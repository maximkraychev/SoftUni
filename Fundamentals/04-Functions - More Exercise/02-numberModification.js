function numberModification(digit) {

    let average = chekAverage(digit);

    if (average >= 5) {
        return digit
    }

    while (average < 5) {
        digit += '9';
        average = chekAverage(digit);

    }

    console.log(digit);


    
    function chekAverage(number) {
        let array = number
            .toString()
            .split('')
            .map(x => Number(x));

        let numberLength = number.toString().length;
        let currentAverage = array.reduce((a, b) => a + b);
        currentAverage /= numberLength
        return currentAverage
    }
}

numberModification(101);