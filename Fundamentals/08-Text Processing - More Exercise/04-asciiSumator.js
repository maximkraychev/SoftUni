function asciiSumator(input) {

    const numberOne = input[0].charCodeAt();
    const numberTwo = input[1].charCodeAt();

    const startFrom = Math.min(numberOne, numberTwo);
    const endBefore = Math.max(numberOne, numberTwo)

    const text = input[2];
    let sum = Number();

    for (const el of text) {
        const numberOFEl = el.charCodeAt();
        if (numberOFEl > startFrom && numberOFEl < endBefore) {
            sum += numberOFEl;
        }
    }

    console.log(sum);
}

asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']
);

asciiSumator(['?',
'E',
'@ABCEF']
)

asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']
)