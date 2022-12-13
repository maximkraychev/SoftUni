/* 
Write a function that takes two positive numbers as input and compute the greatest common divisor.	
The input comes as two positive integer numbers.
The output should be printed on the console.
*/

function greatestCommonDivisorGCD(numOne, numTwo) {

    if (numTwo) {
        return greatestCommonDivisorGCD(numTwo, numOne % numTwo);
    } else {
        console.log(Math.abs(numOne)); 
    }
}

greatestCommonDivisorGCD(15, 5); 
greatestCommonDivisorGCD(2154, 458);