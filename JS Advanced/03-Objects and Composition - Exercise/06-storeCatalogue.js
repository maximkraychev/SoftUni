function storeCatalogue(array) {

    const sortedArr = array
        .sort((a, b) => a.localeCompare(b))
        .map(x => x.replace(' : ', ': '));

    let currentLetter = '';

    sortedArr.forEach(x => {
        if (currentLetter == '' || x[0] !== currentLetter) {
            console.log(x[0]);
            currentLetter = x[0];
        }

        console.log('  ' + x);
    })
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);