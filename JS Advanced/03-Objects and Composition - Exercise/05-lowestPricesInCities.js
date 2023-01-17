function lowestPricesInCities(input) {

    const obj = {};

    for (const line of input) {
        const [townName, product, price] = line.split(' | ');



        if (!obj.hasOwnProperty(product)) {
            obj[product] = { [townName]: Number(price) };

        } else {
            const key = Object.keys(obj[product])[0];
            if (obj[product][key] > Number(price)) {
                obj[product] = { [townName]: Number(price) };
            }
        }

    }

    for (let product in obj) {
        const townAndPrce = Object.entries(obj[product]);
        console.log(`${product} -> ${townAndPrce[0][1]} (${townAndPrce[0][0]})`);
    }
}

// lowestPricesInCities([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'
// ]
// );

lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000',
])