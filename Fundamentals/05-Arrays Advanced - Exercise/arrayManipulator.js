function arrayManipulator(array, commands) {

    for (el of commands) {
        let currentComandsAndInput = el.split(' ');
        let isComandPrint = false;


        switch (currentComandsAndInput[0]) {

            case 'add':
                let indexInAdd = Number(currentComandsAndInput[1])
                let element = Number(currentComandsAndInput[2])
                array.splice(indexInAdd, 0, element);
                break;

            case 'addMany':
                let indexInAddMany = Number(currentComandsAndInput[1]);

                //we start from the end of the array and we end 2 index before the first element
                let lengthInAddMany = currentComandsAndInput.length
                for (let i = lengthInAddMany - 1; i > 1; i--) {
                    let numberToAdd = Number(currentComandsAndInput[i]);
                    array.splice(indexInAddMany, 0, numberToAdd);
                }

                // currentComandsAndInput.splice(0, 2);
                // let numToAdd = currentComandsAndInput.map(Number);
                // array.splice(indexInAddMany, 0, ...numToAdd);
                break;

            case 'contains':
                let elementWeAreSearching = Number(currentComandsAndInput[1]);
                console.log(array.indexOf(elementWeAreSearching));
                break;

            case 'remove':
                let indexInRemove = currentComandsAndInput[1];
                array.splice(indexInRemove, 1);
                break;

            case 'shift':
                let positionsToRotate = Number(currentComandsAndInput[1]);
                for (let i = 0; i < positionsToRotate; i++) {
                    array.push(array.shift());
                }
                break;

            case 'sumPairs':

                let lengthOfTheArrayToSum = array.length;
                let sumArray = []

                if (lengthOfTheArrayToSum % 2 !== 0) {
                    array.push(0);
                }

                for (let i = 0; i < lengthOfTheArrayToSum; i += 2) {

                    let sumNumber = array[i] + array[i + 1]
                    sumArray.push(sumNumber)
                }
                array = sumArray.slice();
                break;

            case 'print':
                console.log(`[ ${array.join(', ')} ]`);
                isComandPrint = true;
                break;

        }

        if (isComandPrint) {
            break;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);

arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print',])


//[ 1, 2, 3, 5, 9, 8, 7, 6, 5 ]
