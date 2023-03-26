function sumOfTwoNumbers(input) {

    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let count = 0;
    let isTheMagicNumberFound = false;
    let neitherEqualsTheMagicNumber = true;

    for(let i = firstNumber; i <= lastNumber; i++) {
        for(let j = firstNumber; j <= lastNumber; j++) {
            count++;
            if((i + j) === magicNumber){
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNumber})`);
                isTheMagicNumberFound = true;
                neitherEqualsTheMagicNumber = false;
                break;
            }
        }
        if(isTheMagicNumberFound){
        break;
        }
    }
if(neitherEqualsTheMagicNumber) {
    console.log(`${count} combinations - neither equals ${magicNumber}`);
}
    
}

sumOfTwoNumbers(["88", 
"888", 
"2000"])





