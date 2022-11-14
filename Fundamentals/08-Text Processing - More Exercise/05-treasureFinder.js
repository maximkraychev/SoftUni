function treasureFinder(input) {

    const key = input.shift().split(' ');
    const keyLength = key.length;

    let row = input.shift();

    while (row !== 'find') {

        let decryptedMessage = '';
        let index = 0;

        for (const char of row) {
            const numberOfChar = char.charCodeAt();
            const updatedNumber = numberOfChar - Number(key[index++])

            if (index === keyLength) {
                index = 0
            }

            const decryptedLetter = String.fromCharCode(updatedNumber);
            decryptedMessage += decryptedLetter;
        }

        const type = decryptedMessage.split('&')[1];
        const firstSymbol = decryptedMessage.lastIndexOf('<');
        const secondSymbol = decryptedMessage.lastIndexOf('>');
        const coordinates = decryptedMessage.slice(firstSymbol + 1, secondSymbol)
        console.log(`Found ${type} at ${coordinates}`);
        row = input.shift();
    }
}

// treasureFinder(["1 2 1 3",
// "ikegfp'jpne)bv=41P83X@",
// "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
// "find"]
// );

treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]
)