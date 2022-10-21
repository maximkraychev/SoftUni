function shoppingList(input) {

    let listArr = input.shift().split('!');
    let currentRow = input.shift()

    while (currentRow !== 'Go Shopping!') {

        let ArrayOfCurrentRow = currentRow.split(' ');
        let [command, itemOne, itemTwo] = ArrayOfCurrentRow;
        let indexOfItemOne = listArr.indexOf(itemOne);

        switch (command) {

            case 'Urgent':
                if (!listArr.includes(itemOne)) {
                    listArr.unshift(itemOne)
                }
                break;

            case 'Unnecessary':
                if (listArr.includes(itemOne)) {
                    let firstPart = listArr.slice(0, indexOfItemOne);
                    let secondPart = listArr.slice(indexOfItemOne + 1);
                    listArr = firstPart.concat(secondPart);
                }
                break;

            case 'Correct':
                if (listArr.includes(itemOne)) {
                    listArr[indexOfItemOne] = itemTwo;
                }
                break;

            case 'Rearrange':
                if (listArr.includes(itemOne)) {
                    let removedItem = listArr.splice(indexOfItemOne, 1);
                    listArr.push(removedItem);
                }
                break;
        }

      currentRow = input.shift();
    }

    console.log(listArr.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);

