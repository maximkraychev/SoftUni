function carWash(list) {

    let value = 0;

    for (const command of list) {

        switch (command) {
            case 'soap': soap(); break;
            case 'water': water(); break;
            case 'vacuum cleaner': vacuumCleaner(); break;
            case 'mud': mud(); break;
        }
    }

    console.log( `The car is ${value.toFixed(2)}% clean.`);

    function soap() {
        value += 10;
    }

    function water() {
        value = value * 1.2;
    }

    function vacuumCleaner() {
        value = value * 1.25;
    }

    function mud() {
        value = value * 0.90;
    }
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);