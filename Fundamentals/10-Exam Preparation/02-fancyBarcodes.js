function fancyBarcodes(input) {

    const numberOfBarcods = Number(input.shift());
    const regExp = /\@\#+[A-Z]{1}[A-Za-z\d]{4,}[A-Z]{1}\@\#+/g;
    const findDigit = /\d/g;

    for (let index = 0; index < numberOfBarcods; index++) {

        const currentLine = input[index];
        const match = currentLine.match(regExp);

        if (match === null) {
            console.log('Invalid barcode');
            continue;
        }

        const digits = match[0].match(findDigit);

        if (digits === null) {
            console.log('Product group: 00');

        } else {
            const productGroup = digits.reduce((a, b) => a + b);
            console.log(`Product group: ${productGroup}`);
        }
    }
}

// fancyBarcodes((["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"])
// );

fancyBarcodes((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
);