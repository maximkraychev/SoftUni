function addAndSubtract(array) {

    let modifyArray = [];
    let sumOfArray = 0;
    let sumOfModifyArray = 0;
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {

        sumOfArray += array[i];

        if (Number(array[i]) % 2 === 0) {
            modifyArray.push(Number(array[i]) + i);
        } else {
            modifyArray.push(Number(array[i]) - i);
        }

        sumOfModifyArray += modifyArray[i];
    }

    // IF THE FIRST CONSOLE.LOG should be string


    // let modifyArrayLength = modifyArray.length;
    // let modifyArrayToString = '';

    // for (let i = 0; i < modifyArrayLength; i++) {

    //     modifyArrayToString += modifyArray[i];

    //     if (i < modifyArrayLength - 1) {
    //         modifyArrayToString += ' ';
    //     }

    // }

    console.log(modifyArray);
    console.log(sumOfArray);
    console.log(sumOfModifyArray);

}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);