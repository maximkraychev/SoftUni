/*
Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
The input comes as an integer number.
The output should be printed on the console.
*/

function sameNumbers(number) {
    const arrNumber = Array.from(String(number))
    const numberToTestWith = arrNumber[0];

    const finalArr = arrNumber.filter(x => x === numberToTestWith ? null : x);
    if (finalArr.length === 0) {
        console.log('true');
    } else {
        console.log('false');
    }

    const sum = arrNumber.reduce((a, b) => Number(a) + Number(b));
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234)