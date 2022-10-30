function inventory(input) {

    let arrayWithHeroes = [];

    input.forEach(line => {
        const [name, level, items] = line.split(' / ');

        arrayWithHeroes.push({
            name,
            level: Number(level),
            items,
        })
    });

    arrayWithHeroes.sort((a, b) => a.level - b.level);

    for (object of arrayWithHeroes) {
        console.log(`Hero: ${object.name}`);
        console.log(`level => ${object.level}`);
        console.log(`items => ${object.items}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);