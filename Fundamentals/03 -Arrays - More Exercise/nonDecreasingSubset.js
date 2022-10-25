function nonDecreasingSubset(array) {

    let finalArray = [];

    finalArray = array.filter((x, index) => {
        if(x >= finalArray[finalArray.length - 1] || index === 0) {
            return finalArray.push(x)
        } else {
            return false
        } 
    })

    // let finalArray = [];
    // finalArray.push(array[0])

    // for (let i = 1; i < array.length; i++) {

    //     let currentNumber = array[i];
    //     let previousNumber = finalArray[finalArray.length - 1];
    //     if (currentNumber >= previousNumber) {
    //         finalArray.push(currentNumber)
    //     }
    // }
    console.log(finalArray.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])

nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])