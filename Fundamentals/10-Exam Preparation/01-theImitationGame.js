function theImitationGame(input) {

    //01. Take encrypted message who is on the first line;
    let encryptedMessage = input.shift();

    //02. Until you recive 'Decode' execute all the commands you recive;
    let line = input.shift();

    while (line !== 'Decode') {
        let arrOfLine = line.split('|');
        const command = arrOfLine.shift();

        switch (command) {
            case 'Move':
                const numbersOfLettarsToMove = Number(arrOfLine[0]);
                const firstPart = encryptedMessage.substring(0, numbersOfLettarsToMove);
                const secondPart = encryptedMessage.substring(numbersOfLettarsToMove);
                encryptedMessage = secondPart.concat(firstPart);
                break;

            case 'Insert':
                const index = Number(arrOfLine[0]);
                const value = arrOfLine[1];
                const partOne = encryptedMessage.substring(0, index);
                const partTwo = encryptedMessage.substring(index);
                encryptedMessage = partOne.concat(value).concat(partTwo)
                break;

            case 'ChangeAll':
                const substring = arrOfLine[0];
                const replacement = arrOfLine[1];

                while (encryptedMessage.includes(substring)) {
                    encryptedMessage = encryptedMessage.replace(substring, replacement);
                }
                break;
        }

        line = input.shift();
    }
    // Print the encrypted message;
    console.log(`The decrypted message is: ${encryptedMessage}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
);

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
)