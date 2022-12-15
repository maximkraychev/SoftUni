/*
Write a function that finds the elements at even positions in an array.
The input comes as an array of string elements.
The output is printed on the console. Collect all elements in a string, separated by space.
Examples:
            Input	                Output		//       Input	        Output
['20', '30', '40', '50', '60']	   20 40 60		//     ['5', '10']	      5
*/

function evenPositionElements(arr) {

    console.log(arr.filter((number, index) => index % 2 == 0 ? number : null).join(' '));

}

evenPositionElements(['20', '30', '40', '50', '60']);