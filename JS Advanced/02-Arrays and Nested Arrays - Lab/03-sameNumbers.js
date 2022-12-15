/*
Write a function that calculates and returns the sum of the first and the last elements in an array.
The input comes as an array of string elements holding numbers.
The output is the return value of your function and should be a number.
Example:

        Input	       Output	//	   Input	    Output
['20', '30', '40']	     60		//  ['5', '10']	      15
*/

function sameNumbers(arr) {

    if (arr.length == 1) {
        return Number(arr[0]);
    }

    return Number(arr[0]) + Number(arr[arr.length - 1]);
}

sameNumbers(['20', '30', '40']);