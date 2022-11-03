function sequences(arrayOfArrays) {

    const arrayOfArraysLenght = arrayOfArrays.length;
    // sorting the arrays in array 
    for (let index = 0; index < arrayOfArraysLenght; index++) {
        arrayOfArrays[index] = JSON.parse(arrayOfArrays[index])
        arrayOfArrays[index].sort((a, b) => b - a)
    }
    // parsing our array of arrays to object and sets the keys to be the value of every array that way we can remove repeating arrays
    let removingRepeatingArrays = {};

    for (let el of arrayOfArrays) {
        removingRepeatingArrays[el] = el
    }

    // set our values in array
    let value = Object.values(removingRepeatingArrays)

    value = value.sort((a, b) => a.length - b.length);

    value.forEach(array => {
        console.log(`[${array.join(', ')}]`);
    })
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]",
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);

// sequences(["[7.14, 7.180, 7.339, 80.099]",
// "[7.339, 80.0990, 7.140000, 7.18]",
// "[7.339, 7.180, 7.14, 80.099]"]
// )