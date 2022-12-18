/*
The input comes as two parameters – an array of strings and a number. The second parameter is N – the step.
The output is every element on the N-th step starting from the first one. If the step is 3, you need to return the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. 
The output is the return value of your function and must be an array.
*/

function printEveryNthElementFromAnArray(arr, number) {

    const newArr = [];
    for (let index = 0; index < arr.length; index += number) {
        newArr.push(arr[index]);
    }

    return newArr;
}

printEveryNthElementFromAnArray(['5',           //Output: ['5', '31', '20']
    '20',
    '31',
    '4',
    '20'],
    2
);

printEveryNthElementFromAnArray(['dsa',         //Output: ['dsa', 'test']
    'asd',
    'test',
    'tset'],
    2
)

printEveryNthElementFromAnArray(['1',           //Output: ['1']
    '2',
    '3',
    '4',
    '5'],
    6
)