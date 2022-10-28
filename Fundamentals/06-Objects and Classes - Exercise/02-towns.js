// first variant
function towns(input) {

    class Town {
        constructor(town, latitude, longitude) {
            this.town = town,
            this.latitude = latitude,
            this.longitude = longitude
        }
    }

    let arrayOfTowns = [];

    for (el of input) {
        let currentTownInfromation = el.split(' | ');
        let town = currentTownInfromation[0];
        let latitude = Number(currentTownInfromation[1]).toFixed(2);
        let longitude = Number(currentTownInfromation[2]).toFixed(2);
        arrayOfTowns.push(new Town(town, latitude, longitude))
    }

    for (currentTown of arrayOfTowns) {
        console.log(`{ town: '${currentTown.town}', latitude: '${currentTown.latitude}', longitude: '${currentTown.longitude}' }`);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]
);

// second variant
function towns2(input) {

    for (el of input) {
        let currentTownInfromation = el.split(' | ');
        let town = currentTownInfromation[0];
        let latitude = Number(currentTownInfromation[1]).toFixed(2);
        let longitude = Number(currentTownInfromation[2]).toFixed(2);

        let townObject = {
            town: town,
            latitude: latitude,
            longitude: longitude,
        }

        console.log(townObject);
    }

}

towns2(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]
);