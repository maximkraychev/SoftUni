/*
Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property, and finally print the object.
The input comes as an array of string elements.
The output should be printed on the console.
*/

function calorieObject(arr) {

    const obj = {};

    for (let index = 0; index < arr.length; index++) {
        obj[arr[index]] = Number(arr[++index]);
    }

    return obj;
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);