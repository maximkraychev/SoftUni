function secretChat(input) {

    let message = input.shift();
    let line = input.shift();

    while (line !== 'Reveal') {
        let [command, ...values] = line.split(':|:');

        switch (command) {
            case 'InsertSpace':
                const index = Number(values[0]);
                const firstPart = message.substring(0, index);
                const secondPart = message.substring(index);
                message = firstPart.concat(' ', secondPart);
                console.log(message);
                break;

            case 'Reverse':
                const substring = values[0];
                if (message.includes(substring)) {
                    const substringLength = substring.length;
                    const startIndex = message.indexOf(substring);
                    const partOne = message.substring(0, startIndex);
                    const partTwo = message.substring(startIndex + substringLength)
                    const reverseSubstring = substring.split('').reverse().join('');
                    message = partOne.concat(partTwo, reverseSubstring);
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;

            case 'ChangeAll':
                const [givenString, replacement] = values;
                while (message.includes(givenString)) {
                    message = message.replace(givenString, replacement);
                }
                console.log(message);
                break;
        }

        line = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )