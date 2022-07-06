function amazingNumbers(number) {

    let input = number.toString();
    let sum = 0;

    for(let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }

    let result = sum.toString().includes('9');
    if(result) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }

}

amazingNumbers(999);