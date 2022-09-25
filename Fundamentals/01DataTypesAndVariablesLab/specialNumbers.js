function specialNumbers(number) {

    for(let i = 1; i <= number; i++) {
        let currentNumber = i;
        let sum = 0;

        for(currentNumber ; currentNumber > 0; currentNumber = Math.floor(currentNumber / 10)) {
            sum += currentNumber % 10;
        }
        
        if(sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers(20);