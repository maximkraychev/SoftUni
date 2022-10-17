function bombNumbers(arrayOfNumbers, bombAndPower) {

    let specialBombNumber = bombAndPower[0];
    let powerOfDestroyedNearNumbers = bombAndPower[1];

    while (arrayOfNumbers.includes(specialBombNumber)) {

        let index = arrayOfNumbers.indexOf(specialBombNumber);

        let startToCutFrom = index - powerOfDestroyedNearNumbers;
        let cut = powerOfDestroyedNearNumbers * 2 + 1;

        if (index - powerOfDestroyedNearNumbers < 0) {

            startToCutFrom = 0;
            cut = index + powerOfDestroyedNearNumbers + 1;

            arrayOfNumbers.splice(startToCutFrom, cut);

        } else {
            arrayOfNumbers.splice(startToCutFrom, cut);

        }
    }

    let sumOfTheRemainingEl = Number();
    arrayOfNumbers.map(el => sumOfTheRemainingEl += el);
    console.log(sumOfTheRemainingEl);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 3]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);