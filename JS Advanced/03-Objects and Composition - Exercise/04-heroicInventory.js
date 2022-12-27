/*
In the era of heroes, every hero has his items that make him unique. Create a function that creates a register for the heroes, with their names, level, and items, if they have such. The register should accept data in a specified format, and return it presented in a specified format. 

Input:
The input comes as an array of strings. Each element holds data for a hero, in the following format:
"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."
You must store the data about every hero. The name is a string, a level is a number and the items are all strings.

Output:
The output is a JSON representation of the data for all the heroes you’ve stored. The data must be an array of all the heroes. Check the examples for more info.
*/

function heroicInventory(input) {

    const dataForAllHeroes = [];

    for (const char of input) {
        let [name, level, items] = char.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];

        const currentHero = {
            name,
            level,
            items
        };

        dataForAllHeroes.push(currentHero);
    }
    
    return JSON.stringify(dataForAllHeroes);
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);