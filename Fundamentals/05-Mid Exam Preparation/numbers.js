function numbers(numbers) {

    let arrayOfNumbers = numbers.split(' ').map(x => Number(x));
    let sum = Number();

    arrayOfNumbers.forEach(el => {
        sum += el;
    })

    let arrayOfNumbersLength = arrayOfNumbers.length;
    let averageNumber = sum / arrayOfNumbersLength;

    let greaterThanAverage = arrayOfNumbers.filter(el => {
        if (el > averageNumber) {
            return el
        }
    })

    if (greaterThanAverage.length < 1) {
        return 'No'
    }

    let greaterThanAverageAscending = greaterThanAverage.sort((a, b) => b - a);

    if (greaterThanAverageAscending.length > 5) {
        let firstFiveDigits = []

        for (let i = 0; i < 5; i++) {
            firstFiveDigits.push(greaterThanAverageAscending[i])
        }

        console.log(firstFiveDigits.join(' '));

    } else {
        console.log(greaterThanAverageAscending.join(' '));
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log(numbers('1'));
numbers('-1 -2 -3 -4 -5 -6')