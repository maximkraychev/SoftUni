function oddAndEvenSum(inputNumber) {
    let isEven
    let getOddOrEvenNumber = (number) => number % 2 === 0 ? isEven = true : isEven = false;

    let inputAsString = inputNumber.toString();
    let inputAsStringLength = inputAsString.length


    let summOfEven = 0;
    let sumOfOdd = 0;

    for (let index = 0; index < inputAsStringLength; index++) {

        let firstDigitAsNumber = Number(inputAsString[index]);

        getOddOrEvenNumber(firstDigitAsNumber);

        if (isEven === true) {
            summOfEven += firstDigitAsNumber;
        } else if (isEven === false) {
            sumOfOdd += firstDigitAsNumber;
        } else {
            continue;
        }

        isEven = undefined;
    }
    
    console.log(`Odd sum = ${sumOfOdd}, Even sum = ${summOfEven}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);