function arrayManipulations(input) {

    let array = input
        .shift()
        .split(' ')

    inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {

        let index = 0;
        let currentComandAndValue = input[i].split(' ');

        switch (currentComandAndValue[index++]) {
            case 'Add': array.push(currentComandAndValue[index]);
                break;
            case 'Remove': array = array.filter(el => el !== currentComandAndValue[index])
                //remove(currentComandAndValue[index]);
                break;
            case 'RemoveAt': array.splice(Number(currentComandAndValue[index]), 1);
                break;
            case 'Insert': array.splice(currentComandAndValue[index + 1], 0, currentComandAndValue[index]);
                break;
        }
    }

    console.log(array.join(' '));

    // function remove(el) {
    //     let arrayLength = array.length

    //     for (let j = 0; j < arrayLength; j++) {
    //         let indexOfTheElementToBeRemoved = array.indexOf(el, j);

    //         if (indexOfTheElementToBeRemoved > 0) {
    //             array.splice(indexOfTheElementToBeRemoved, 1);
    //         }
    //     }
    // }
}

arrayManipulations(['4 19 2 53 2 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
)