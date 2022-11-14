function valueOfAString(input) {

    const textToCheck = input[0];
    const uppOrLowCase = input[1];
    let sum = Number();

    for(const el of textToCheck) {

        const numberOfEl = el.charCodeAt()
        if(uppOrLowCase === 'UPPERCASE') {
            if(numberOfEl >= 65 && numberOfEl <= 90) {
                sum += numberOfEl
            }

        } else if (uppOrLowCase === 'LOWERCASE') {
            if(numberOfEl >= 97 && numberOfEl <= 122) {
                sum += numberOfEl
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']
);

valueOfAString(['AC/DC',
'UPPERCASE']
)