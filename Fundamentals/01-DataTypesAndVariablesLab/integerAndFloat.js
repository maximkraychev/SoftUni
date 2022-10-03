function integerAndFloat(numberOne, numberTwo, numberThree) {

    let sum = numberOne + numberTwo + numberThree;
    
    if(sum % 1 === 0) {
        sum += " - Integer";
    } else {
        sum += " - Float";
    }

    console.log(sum);
}
integerAndFloat(9, 100, 1.1);