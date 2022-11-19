function softUniBarIncome(input) {

    const regExp = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[\d]+[\.]?[\d]*)\$/g;
    let totalIncome = 0;

    let line = input.shift();

    while (line !== 'end of shift') {

        const matches = line.matchAll(regExp);

        for (const match of matches) {
            const name = match.groups.customer;
            const product = match.groups.product;
            const count = match.groups.count;
            const price = match.groups.price;
            const totalPrice = Number(count) * Number(price);
            totalIncome += totalPrice
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }

        line = input.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

// softUniBarIncome(['%George%<Croissant>|2|10.3$',
// '%Peter%<Gum>|1|1.3$',
// '%Maria%<Cola>|1|2.4$',
// 'end of shift']
// );

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
)