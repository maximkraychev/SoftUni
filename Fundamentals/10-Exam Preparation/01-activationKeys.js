function activationKeys(input) {

    // 01. Take the base key;
    // 02. Loop through the rest of the input and execute the commands;
    // 03. Print 

    let key = input.shift();
    let commands = input.shift();

    while (commands !== 'Generate') {
        const [command, ...instructions] = commands.split('>>>')

        switch (command) {

            case 'Contains':
                const substring = instructions[0];

                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}`);
                } else {
                    console.log("Substring not found!");
                }
                break;

            case 'Flip':
                const [upOrLowCase, startIndex, endIndex] = instructions;
                const partToModify = key.substring(startIndex, endIndex);
                let theNewPart = '';

                if (upOrLowCase === 'Upper') {
                    theNewPart = partToModify.toUpperCase(partToModify);
                } else {
                    theNewPart = partToModify.toLowerCase(partToModify);
                }

                key = key.replace(partToModify, theNewPart);
                console.log(key);
                break;

            case 'Slice':
                const [startIndexDelete, endIndexDelete] = instructions;
                const partToDelete = key.substring(startIndexDelete, endIndexDelete);
                key = key.replace(partToDelete, '');
                console.log(key);
                break;
        }

        commands = input.shift();
    }

    console.log(`Your activation key is: ${key}`);
}

// activationKeys((["abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"])
// );

activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
)