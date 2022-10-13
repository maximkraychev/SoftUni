function smallestTwoNumbers(array) {

    let firstSmalestNumber = Number.MAX_VALUE;
    let secondSmalestNumber = Number.MAX_VALUE;

    for (let el of array) {

        if (el <= firstSmalestNumber) {

            secondSmalestNumber = firstSmalestNumber
            firstSmalestNumber = el;

        } else if (el < secondSmalestNumber && el != firstSmalestNumber) {

            secondSmalestNumber = el;
        }
    }

    console.log(firstSmalestNumber + ' ' + secondSmalestNumber);

    // let sortedArray = array
    //     .sort((a, b) => a - b)
    //     .slice(0, 2)
    //     .join(' ')

    // console.log(sortedArray);

}

smallestTwoNumbers([5, 4, 3, 2, 1]);
smallestTwoNumbers([1, 1])
smallestTwoNumbers([1, 2, 3, 4, 5])
smallestTwoNumbers([1, 5, 6, 4, 8, 1, 3])
smallestTwoNumbers([1, 5, 6, 2, 3, 8, 9])
smallestTwoNumbers([1])
