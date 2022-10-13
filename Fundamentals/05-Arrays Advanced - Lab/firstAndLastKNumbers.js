function firstAndLastKNumbers(array) {

    let howManyIndexFromArrayToCopy = array.shift();

    let firstElements = array.slice(0, howManyIndexFromArrayToCopy);

    let lastElements = array.slice(array.length - howManyIndexFromArrayToCopy);

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));

}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);