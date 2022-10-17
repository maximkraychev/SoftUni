function sortAnArrayByTwoCriteria(array) {

    let sortedArray = array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    sortedArray.forEach(el => console.log(el));


}

sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])