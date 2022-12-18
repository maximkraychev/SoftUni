/*
The input comes as two parameters – an array of strings and a string. The second parameter is the delimiter.
The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter.
*/

function printAnArrayWithaGivenDelimiter(array, delimiter) {

    console.log(array.join(delimiter));

}

printAnArrayWithaGivenDelimiter(['One',             //Expecte output: One-Two-Three-Four-Five
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);

printAnArrayWithaGivenDelimiter(['How about no?',               //Expecte output: How about no?_I_will_not_do_it!
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
)