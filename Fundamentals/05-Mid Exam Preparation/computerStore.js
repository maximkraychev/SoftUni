function computerStore(input) {

    let currentCommand = input.shift();
    let priceWithoutTax = 0;
    let tax = 0.20;

    while (currentCommand !== 'special' && currentCommand !== 'regular') {

        let currentPartPrice = Number(currentCommand);

        if (currentPartPrice >= 0) {
            priceWithoutTax += currentPartPrice;
        } else {
            console.log("Invalid price!");
        }

        currentCommand = input.shift();
    }

    if (priceWithoutTax > 0) {

        let taxPrice = priceWithoutTax * tax
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxPrice.toFixed(2)}$`);

        if (currentCommand === 'special') {
            let discount = 0.10;
            priceWithoutTax = priceWithoutTax - (priceWithoutTax * discount);
            taxPrice = taxPrice - (taxPrice * discount);
        }

        let totalPriceWithTax = priceWithoutTax + taxPrice;

        console.log('-----------');
        console.log(`Total price: ${totalPriceWithTax.toFixed(2)}$`);

    } else {
        console.log("Invalid order!");
    }
}

computerStore([
    'regular'
])


