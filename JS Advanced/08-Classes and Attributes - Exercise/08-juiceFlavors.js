function juiceFlavors(input) {

    const juicesStorage = {};
    const bottlesOfJuice = {};

    input.forEach(line => {
        const [juice, amount] = line.split(' => ');

        if (juicesStorage.hasOwnProperty(juice) == false) {
            juicesStorage[juice] = 0;
        }
        juicesStorage[juice] += Number(amount);

        if (juicesStorage[juice] >= 1000) {
            const bottle = Math.floor(juicesStorage[juice] / 1000);
            juicesStorage[juice] -= bottle * 1000;

            if (bottlesOfJuice.hasOwnProperty(juice) == false) {
                bottlesOfJuice[juice] = 0;
            }
            bottlesOfJuice[juice] += bottle;
        }
    })

    for (const [juiceName, bottles] of Object.entries(bottlesOfJuice)) {
        console.log(`${juiceName} => ${bottles}`);
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)