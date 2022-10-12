function perfectNumber(number) {

    let getSumOfAllPositiveDivisors = (digit) => {

        let sumOfAllPositiveDivisors = 0;
        for (let i = 1; i < digit; i++) {

            if (digit % i === 0) {
                sumOfAllPositiveDivisors += i;
            }
        }

        return sumOfAllPositiveDivisors;
    }

    if (number === getSumOfAllPositiveDivisors(number)) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
