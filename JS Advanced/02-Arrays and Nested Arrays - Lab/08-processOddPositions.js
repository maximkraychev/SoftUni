/*
You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array, doubled and in reverse order.
The input comes as an array of number elements.
The output is the return on the console on a single line, separated by space.
Example:

          Input	            Output	    //	        Input	             Output
    [10, 15, 20, 25]	    50 30	    //	[3, 0, 10, 4, 7, 3]	         6 8 0

*/

function processOddPositions(arr) {

    const result = arr
    .filter((number, index) => index % 2 !== 0 ? true : false)
    .map(x => x * 2)
    .reverse()
    .join(' ');
    
    return result;
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);