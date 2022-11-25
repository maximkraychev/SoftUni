function thePianist(input) {

    // 1. Take the number of initial pieces 
    const numberOfTheInitialPieces = Number(input.shift());

    // 2. Loop trough the input(to index = number of initial pices) take the pieces and store them in object;
    let objOfPieces = {};
    for (let index = 0; index < numberOfTheInitialPieces; index++) {
        const [piece, composer, key] = input.shift().split('|');
        objOfPieces[piece] = {
            composer,
            key,
        }
    }

    // 3. After that do wille loop to the rest of the input until reciving 'Stop', split every line and execute the given commands;
    let line = input.shift();
    while (line !== 'Stop') {

        const [command, ...values] = line.split('|');

        switch (command) {
            case 'Add':
                const currentPiece = values[0];
                const currentComposer = values[1];
                const currentKey = values[2];
                if (objOfPieces.hasOwnProperty(currentPiece)) {
                    console.log(`${currentPiece} is already in the collection!`);
                } else {
                    objOfPieces[currentPiece] = {
                        composer: currentComposer,
                        key: currentKey
                    }
                    console.log(`${currentPiece} by ${currentComposer} in ${currentKey} added to the collection!`);
                }
                break;

            case 'Remove':
                const priceToRemove = values[0];
                if (objOfPieces.hasOwnProperty(priceToRemove)) {
                    delete objOfPieces[priceToRemove];
                    console.log(`Successfully removed ${priceToRemove}!`);
                } else {
                    console.log(`Invalid operation! ${priceToRemove} does not exist in the collection.`);
                }
                break;

            case 'ChangeKey':
                const piceCurrent = values[0];
                const newKey = values[1];
                if (!objOfPieces.hasOwnProperty(piceCurrent)) {
                    console.log(`Invalid operation! ${piceCurrent} does not exist in the collection.`);
                } else {
                    objOfPieces[piceCurrent]['key'] = newKey;
                    console.log(`Changed the key of ${piceCurrent} to ${newKey}!`);
                }
                break;
        }

        line = input.shift();
    }

    // 4. Print the final result by the format needed; 
    for (const piece in objOfPieces) {
        console.log(`${piece} -> Composer: ${objOfPieces[piece]['composer']}, Key: ${objOfPieces[piece]['key']}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)