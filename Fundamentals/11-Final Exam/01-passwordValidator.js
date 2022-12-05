function passwordValidator(input) {

    let password = input.shift();

    let line = input.shift();

    while (line !== 'Complete') {

        let [command, ...values] = line.split(' ');

        if (command === 'Make') {
            command += ' ' + values.shift();
        }

        switch (command) {
            case 'Make Upper': {
                const indexInUpper = Number(values[0]);
                if (indexInUpper >= 0 && indexInUpper < password.length) {
                    const letterToReplace = password[indexInUpper].toUpperCase();
                    password = password.substring(0, indexInUpper) + letterToReplace + password.substring(indexInUpper + 1);
                    console.log(password);
                }
                break;
            }
            case 'Make Lower': {
                const indexInLower = Number(values[0]);

                if (indexInLower >= 0 && indexInLower < password.length) {
                    const letterToReplace = password[indexInLower].toLowerCase();
                    password = password.substring(0, indexInLower) + letterToReplace + password.substring(indexInLower + 1);
                    console.log(password);
                }
                break;
            }
            case 'Insert': {
                const index = Number(values[0]);
                const char = values[1];

                if (index >= 0 && index < password.length) {
                    password = password.substring(0, index).concat(char, password.substring(index));
                    console.log(password);
                }
                break;
            }
            case 'Replace': {
                const char = values[0];
                if (!password.includes(char)) {
                    break;
                }
                const value = Number(values[1]);
                const asciChar = char.charCodeAt();
                const newChar = String.fromCharCode(asciChar + value);

                while (password.includes(char)) {
                    password = password.replace(char, newChar);
                }

                console.log(password);
                break;
            }
            case 'Validation':
                if (password.length < 8) {
                    console.log('Password must be at least 8 characters long!');
                }

                if (password.match(/\W/g) !== null) {
                    console.log('Password must consist only of letters, digits and _!');
                }

                if (password.match(/[A-Z]/g) === null) {
                    console.log('Password must consist at least one uppercase letter!');
                }

                if (password.match(/[a-z]/g) === null) {
                    console.log('Password must consist at least one lowercase letter!');
                }

                if (password.match(/\d/g) === null) {
                    console.log('Password must consist at least one digit!');
                }
                break;
        }

        line = input.shift();
    }
}

// passwordValidator((['invalidpassword*',
// 'Add 2 p',
// 'Replace i -50',
// 'Replace * 10',
// 'Make Upper 2',
// 'Validation',
// 'Complete'])
// )

// passwordValidator((['123456789',
//     'Insert 3 R',
//     'Replace 5 15',
//     'Validation',
//     'Make Lower 3',
//     'Complete'])
// )

passwordValidator((['1234asdA*56789',
    //'Insert 3 R',
    //'Replace 5 15',
    'Validation',
    //'Make Lower 3',
    'Complete']))