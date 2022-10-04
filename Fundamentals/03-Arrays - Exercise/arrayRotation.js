function arrayRotation(arr, rotations) {

    // Without methods;

    let arrLength = arr.length;

    if (rotations % arrLength === 0) {
        // If the rotations % arrLength = 0 then the array will stay the same, and there is no need to rotate it. 
    } else {
        for (let i = 0; i < rotations; i++) {
            let firstElement = arr[0];

            for (let y = 0; y < arrLength - 1; y++) {
                arr[y] = arr[y + 1];

                if (y === arrLength - 2) {
                    arr[arrLength - 1] = firstElement;
                }
            }
        }
    }

    let arrToString = '';

    for (let i = 0; i < arrLength; i++) {
        arrToString += arr[i];

        if (i < arrLength - 1) {
            arrToString += ' ';
        }
    }

    console.log(arrToString);

}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);