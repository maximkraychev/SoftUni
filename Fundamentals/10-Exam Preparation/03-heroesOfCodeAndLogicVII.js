function heroesOfCodeAndLogicVII(input) {

    // 1. Take the number of heroes and do a loop for that amount, in each cicyle take the hero and his HP and MP and store them; 
    const numberOfHeroes = Number(input.shift());
    let heroes = {};
    const maxHp = 100;
    const maxMana = 200;

    for (let index = 0; index < numberOfHeroes; index++) {
        let [name, hp, mana] = input.shift().split(' ');
        heroes[name] = {
            'hp': Number(hp),
            'mana': Number(mana),
        }
    }

    // 2. Loop trough the rest of the input and execute every command until you recive 'End';
    let line = input.shift();

    while (line !== 'End') {
        let [command, heroName, ...values] = line.split(' - ');

        switch (command) {
            case 'CastSpell':
                const manaNeeded = Number(values[0]);
                const spellName = values[1];

                if (heroes[heroName]['mana'] >= manaNeeded) {
                    heroes[heroName]['mana'] -= manaNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName]['mana']} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case 'TakeDamage':
                const damage = Number(values[0]);
                const attacker = values[1];

                if (heroes[heroName]['hp'] > damage) {
                    heroes[heroName]['hp'] -= damage;
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName]['hp']} HP left!`);
                } else {
                    delete heroes[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;

            case 'Recharge':
                let amountMana = Number(values[0]);

                if (heroes[heroName]['mana'] + amountMana > maxMana) {
                    amountMana = maxMana - heroes[heroName]['mana'];
                }

                heroes[heroName]['mana'] += amountMana;
                console.log(`${heroName} recharged for ${amountMana} MP!`);
                break;

            case 'Heal':
                let amountHp = Number(values[0]);

                if (heroes[heroName]['hp'] + amountHp > maxHp) {
                    amountHp = maxHp - heroes[heroName]['hp'];
                }

                heroes[heroName]['hp'] += amountHp;
                console.log(`${heroName} healed for ${amountHp} HP!`);
                break;
        }

        line = input.shift();
    }

    // 3. Print the final result by the given format; 
    for (const hero in heroes) {
        console.log(`${hero}\n  HP: ${heroes[hero]['hp']}\n  MP: ${heroes[hero]['mana']}`);
    }
}

heroesOfCodeAndLogicVII(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);