function passwordGenerator(input) {

    const string = input[0].concat(input[1])
    const word = input[2].toUpperCase();
    const wordLength = word.length;
    const vowelsArray = ['a', 'e', 'o','u', 'i'];
    let count = 0;

    let password = '';

    for(const el of string) {
        if(!vowelsArray.includes(el)) {
            password += el;
        } else {
            password += word[count++]
            if(count === wordLength) {
                count = 0;
            }
        }
    }

    password = password
    .split('')
    .reverse()
    .join('')
    
    console.log(`Your generated password is ${password}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    );