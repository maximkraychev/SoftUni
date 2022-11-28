function passwordReset(input) {

    // 1. Take the string form the input;
    let string = input.shift();
    let line = input.shift();

    // 2. Do a while loop until you recive 'Done' and execute the given commands; 
    while (line !== 'Done') {

        if (line === 'TakeOdd') {
            string = string
                .split('')
                .filter((el, i) => i % 2 !== 0 ? el : null)
                .join('');
            console.log(string);

        } else {
            let [command, ...value] = line.split(' ');

            switch (command) {
                case 'Cut':
                    const index = Number(value[0]);
                    const length = Number(value[1]);
                    const cuttedSubstring = string.substring(index, index + length);
                    string = string.replace(cuttedSubstring, '');
                    console.log(string);
                    break;

                case 'Substitute':
                    const substring = value[0];
                    const substitute = value[1];

                    if (!string.includes(substring)) {
                        console.log('Nothing to replace!');
                        break;
                    }

                    while (string.includes(substring)) {
                        string = string.replace(substring, substitute)
                    }
                    console.log(string);
                    break;
            }
        }

        line = input.shift();
    }

    // 3. Print the final result by the given format; 
    console.log(`Your password is: ${string}`);
}

// passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
//     "TakeOdd",
//     "Cut 15 3",
//     "Substitute :: -",
//     "Substitute | ^",
//     "Done"])
// );

passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
)