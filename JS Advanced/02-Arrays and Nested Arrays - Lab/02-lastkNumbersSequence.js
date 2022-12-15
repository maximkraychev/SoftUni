/*
You are given two integers n and k. Write a JS function that generates and return the following sequence:
•	The first element is 1
•	Every following element equals the sum of the previous k elements
•	The length of the sequence is n elements
The input comes as two number arguments. The first element represents the number n, and the second – the number k.
The output is the return value of your function and should be an array of numbers.
Example:

Input	       Output		    //     Input	            Output
6, 3	[1, 1, 2, 4, 7, 13]		//      8, 2	    [1, 1, 2, 3, 5, 8, 13, 21]
*/

function lastkNumbersSequence(n, k) {

    const arr = [1];

    while (arr.length < n) {
        let length = arr.length;
        let numberToPush = 0;

        for (let index = 0; index < k; index++) {
            numberToPush += arr[length - 1 - index] || 0;
        }

        arr.push(numberToPush);
    }

    return arr;
}

lastkNumbersSequence(6, 3);
lastkNumbersSequence(8, 2);