function arrayModifier(input) {

    let array = input.shift().split(' ').map(x => Number(x));
    let currentRow = input.shift();

    while (currentRow !== 'end') {
        
        let currentRowAsArray = currentRow.split(' ');
        let command = currentRowAsArray[0];
        let indexOne = Number(currentRowAsArray[1]);
        let indexTwo = Number(currentRowAsArray[2]);

        switch (command) {

            case 'swap':
                let holder = array[indexOne];
                array[indexOne] = array[indexTwo];
                array[indexTwo] = holder;
                break;

            case 'multiply':
                let elementOnIndexOne = array[indexOne];
                let elementOnIndexTwo = array[indexTwo];
                let multyplyedOneAndTwo = elementOnIndexOne * elementOnIndexTwo;
                array.splice(indexOne, 1, multyplyedOneAndTwo);
                break;

            case 'decrease':
                array = array.map(x => x - 1);
                break;
        }

        currentRow = input.shift();
    }

    console.log(array.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
)