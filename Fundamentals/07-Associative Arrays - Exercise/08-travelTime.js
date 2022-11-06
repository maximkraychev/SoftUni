function travelTime(input) {

    let possibleTravels = {};

    input.forEach(line => {
        let [country, city, cost] = line.split(' > ');
        cost = Number(cost);

        if (!possibleTravels.hasOwnProperty(country)) {
            possibleTravels[country] = { [city]: cost };

        } else if (!possibleTravels[country].hasOwnProperty(city)) {
            possibleTravels[country][city] = cost;

        } else {
            if (cost < possibleTravels[country][city]) {
                possibleTravels[country][city] = cost;
            }
        }
    })

    let entries = Object.entries(possibleTravels);

    const sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]));

    sortedEntries.forEach(possibleTrip => {

        const country = possibleTrip[0];
        let cityAndCost = Object.entries(possibleTrip[1]);
        const sortedCityAndCost = cityAndCost.sort((a, b) => a[1] - b[1]);
        let printLine = ''

        for (let [city, price] of sortedCityAndCost) {
            
            if (printLine === '') {
                printLine += `${country} -> ${city} -> ${price} `;
            } else {
                printLine += `${city} -> ${price} `;
            }
        }

        console.log(printLine.trim());
    })
}



// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]
// );

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]
)