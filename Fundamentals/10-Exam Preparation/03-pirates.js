function pirates(input) {

    // 01. Until the 'Sail' command is recive we need to store all cityes and their information in object(if we recive city that we have already added to
    //     the object then add the value to the previous); 
    let cityes = {};
    let line = input.shift();

    while (line !== 'Sail') {
        const [city, population, gold] = line.split('||');

        if (!cityes.hasOwnProperty(city)) {
            cityes[city] = {
                population: Number(population),
                gold: Number(gold),
            }
        } else {
            cityes[city]['population'] += Number(population);
            cityes[city]['gold'] += Number(gold);
        }

        line = input.shift();
    }

    // 02. We will start reciving commands until the "End" command, execute the commands;
    line = input.shift();

    while (line !== 'End') {
        const [command, ...values] = line.split('=>');

        switch (command) {
            case 'Plunder': {
                const town = values[0];
                const people = Number(values[1]);
                const gold = Number(values[2])
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                
                if (cityes[town]['population'] - people <= 0 || cityes[town]['gold'] - gold <= 0) {
                    delete cityes[town];
                    console.log(`${town} has been wiped off the map!`);
                    break;
                }

                cityes[town]['population'] -= people;
                cityes[town]['gold'] -= gold;
                break;
            }

            case 'Prosper': {
                const town = values[0];
                const gold = Number(values[1]);

                if (gold < 0) {
                    console.log('Gold added cannot be a negative number!');
                    break;
                } else {
                    cityes[town]['gold'] += gold;
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${cityes[town]['gold']} gold.`);
                }
                break;
            }
        }

        line = input.shift();
    }

    // 03. Print the final output to the given format;
    const numberExistingSettlements = Object.keys(cityes).length;

    if (numberExistingSettlements > 0) {
        console.log(`Ahoy, Captain! There are ${numberExistingSettlements} wealthy settlements to go to:`);
        for (const city in cityes) {
            console.log(`${city} -> Population: ${cityes[city]['population']} citizens, Gold: ${cityes[city]['gold']} kg`);
        }

    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
);