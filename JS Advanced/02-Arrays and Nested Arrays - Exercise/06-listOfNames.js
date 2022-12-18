/*
You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, each on a new line.
*/

function listOfNames(arr) {

    const sortedArr = arr.sort((a, b) => a.localeCompare(b));

    sortedArr.forEach((el, index) => {
        console.log(`${index + 1}.${el}`);
    })
}

listOfNames(["John", "Bob", "Christina", "Ema"]);