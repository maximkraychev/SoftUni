/*
Write a function that extracts only those numbers that form a non-decreasing subset. In other words, you start from the first element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number. 
The input comes as an array of numbers.
The output is the processed array after the filtration, which should be a non-decreasing subset. Return the array of numbers.
*/

function extractIncreasingSubsequenceFromArray(arr) {

    // const newArr = [];
    // arr.reduce((acc, num) => {

    //     if (num >= acc) {
    //         newArr.push(num);
    //         return num;
    //     } else {
    //         return acc;
    //     }

    // }, Number.MIN_SAFE_INTEGER);

    // return newArr;

    const newArr = arr.reduce((acc, num, index) => {

        if (index === 0) {
            acc.push(num);
            return acc;
        }

        if (num >= acc[acc.length - 1]) {
            acc.push(num);
            return acc;
        } else {
            return acc;
        }
    }, []);

    return newArr;
}

extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);

extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]
)

extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]
)