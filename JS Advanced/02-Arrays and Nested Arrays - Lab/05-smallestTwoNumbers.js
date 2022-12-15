/*
5.	Smallest Two Numbers
Write a function that prints the two smallest elements from an array of numbers.
The input comes as an array of number elements.
The output is printed on the console on a single line, separated by space.
Example:

    Input	            Output		     //           Input	              Output
[30, 15, 50, 5]	         5 15		     //    [3, 0, 10, 4, 7, 3]	        0 3

*/

function smallestTwoNumbers(arr) {

    if (arr.length === 0) {
        return
    } else if (arr.length === 1) {
        return arr[0];
    }

    let firstSmalestNumber = Math.min(arr[0], arr[1]);
    let secondSmalestNumber = Math.max(arr[0], arr[1]);

    for (let index = 2; index < arr.length; index++) {
        let currentNumber = arr[index];

        if (currentNumber <= firstSmalestNumber) {
            secondSmalestNumber = firstSmalestNumber;
            firstSmalestNumber = currentNumber;
        } else if (currentNumber < secondSmalestNumber) {
            secondSmalestNumber = currentNumber;
        }
    }

    console.log(firstSmalestNumber + ' ' + secondSmalestNumber);
}




//smallestTwoNumbers([30, 15, 50, 5]);
//smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
smallestTwoNumbers([5])