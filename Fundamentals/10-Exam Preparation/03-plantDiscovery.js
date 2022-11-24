function plantDiscovery(input) {

    const plantsNumber = Number(input.shift());
    let allPlants = {};

    //  Taking all the allPlants and their rarity and put them in the object;
    for (let index = 0; index < plantsNumber; index++) {
        const [plant, rarity] = input.shift().split('<->');
        allPlants[plant] = {
            'rarity': Number(rarity),
            'rating': 0,
            'count': 0,
        }
    }
    let comands = input.shift();

    while (comands !== 'Exhibition') {

        //Split the commands into different variable;
        comands = comands.split(': ');
        const comand = comands.shift();
        const [plant, value] = comands[0].split(' - ');

        // Depeneding on the command (switch);
        if (allPlants.hasOwnProperty(plant)) {
            switch (comand) {
                case 'Rate':
                    const currentRating = Number(value);
                    allPlants[plant]['rating'] += currentRating;
                    allPlants[plant]['count']++;
                    break;

                case 'Update':
                    const newRarity = Number(value);
                    allPlants[plant]['rarity'] = newRarity;
                    break;

                case 'Reset':
                    allPlants[plant]['rating'] = 0;
                    allPlants[plant]['count'] = 0;
                    break;
            }
        } else {
            console.log('error');
        }

        comands = input.shift();
    }

    console.log('Plants for the exhibition:');

    // Go into the object and print the needed output ;
    for (let plant in allPlants) {

        // Be careful when when calculating the avarage (0/0 is not posible);
        let averageRating = 0;
        if (allPlants[plant]['rating'] !== 0) {
            averageRating = allPlants[plant]['rating'] / allPlants[plant]['count'];
        }

        console.log(`- ${plant}; Rarity: ${allPlants[plant]['rarity']}; Rating: ${averageRating.toFixed(2)}`);
    }
}

plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
);

plantDiscovery((["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
)