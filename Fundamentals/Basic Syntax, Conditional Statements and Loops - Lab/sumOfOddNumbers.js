function sumOfOddNumbers(num) {

    let sum = 0;
    let number = 1;
    
    for(let i = 1; i <= num; i++) {
        console.log(number);
        sum += number;
        number += 2
    }
    
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);