function sumDigits(number) {

    let sum = 0;
    let numberAsString = number.toString();
    let numberOfTheDigits = numberAsString.length

    for(let index = 0; index < numberOfTheDigits; index++) {

        sum += Number(numberAsString[index]);
    }

    console.log(sum);

}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);