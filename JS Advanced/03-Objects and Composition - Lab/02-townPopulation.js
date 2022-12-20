/*
You have been tasked to create a registry for different towns and their population.

Input:
The input comes as array of strings. Each element will contain data for a town and its population in the following format: "{townName} <-> {townPopulation}"
If you receive the same town twice, you should add the given population to the current one.

Output:
As output, you must print all the towns and their population.
*/

function townPopulation(arr) {

    const obj = {}

    arr.forEach(x => {
        const [name, population] = x.split(' <-> ');

        if (obj.hasOwnProperty(name)) {
            obj[name] += Number(population);
        } else {
            obj[name] = Number(population);
        }
    })

    for (const [name, population] of Object.entries(obj)) {
        console.log(`${name} : ${population}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)
