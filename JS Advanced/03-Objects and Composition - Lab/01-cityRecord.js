/*
You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it.
*/

function cityRecord(name, population, treasury) {

    const obj = {
        name,
        population,
        treasury,
    }

    return obj
}

cityRecord('Tortuga',
    7000,
    15000
);