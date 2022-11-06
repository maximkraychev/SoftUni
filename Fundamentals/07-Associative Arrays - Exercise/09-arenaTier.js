function arenaTier(input) {

    let objGladiators = {};

    let command = input.shift();

    while (command !== 'Ave Cesar') {

        // Adding objGladiators and their technique and skill into the object
        if (command.includes('->')) {
            let [name, technique, skill] = command.split(' -> ');
            skill = Number(skill);

            if (!objGladiators.hasOwnProperty(name)) {
                objGladiators[name] = { [technique]: skill }

            } else {
                if (!objGladiators[name].hasOwnProperty(technique)) {
                    objGladiators[name][technique] = skill;

                } else {
                    if (objGladiators[name][technique] < skill) {
                        objGladiators[name][technique] = skill;
                    }
                }
            }
            // Fight -> If we receive the fight command 
        } else {
            let [gladiatorOne, gladiatorTwo] = command.split(' vs ');

            // First chek if the two gladiators exist
            if (objGladiators[gladiatorOne] && objGladiators[gladiatorTwo]) {
                //Convert they're skill into array
                let entriesFromGladiatorOne = Object.entries(objGladiators[gladiatorOne]);
                let entriesFromGladiatorTwo = Object.entries(objGladiators[gladiatorTwo]);

                let gladiatorOneScore = 0;
                let gladiatorTwoScore = 0;

                // Loop over the arrays and chek if they have some technique in common
                // If they do add the skill of that technique to overal score --> Compare them after that and delete the gladiator with lower score
                // if they don't have technique in common --> Do nothing

                for (let [techniqueGladOne, skillGladOne] of entriesFromGladiatorOne) {
                    for (let [techniqueGladTwo, skillGladTwo] of entriesFromGladiatorTwo) {
                        if (techniqueGladOne === techniqueGladTwo) {
                            gladiatorOneScore += skillGladOne;
                            gladiatorTwoScore += skillGladTwo;
                        }
                    }
                }
                // Comparing and deleting
                if (gladiatorOneScore > gladiatorTwoScore) {
                    delete objGladiators[gladiatorTwo];
                } else if (gladiatorOneScore < gladiatorTwoScore) {
                    delete objGladiators[gladiatorOne];
                }
            }
        }

        command = input.shift();
    }
        // Get the total skill and add it in the object
    for (let gladiator in objGladiators) {
        let totalSkill = Object.values(objGladiators[gladiator]).reduce((a, b) => a + b);
        objGladiators[gladiator].totalSkill = totalSkill;
    }
    // Sort by total skill(descending) and if they are eaquals sort by name(ascending);
    let entries = Object.entries(objGladiators);
    let sorted = entries.sort((a, b) => b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0]));

    //Loop over every gladiator, sort his technique by skill first(descending) and if the skill is eaqual by technique name(ascending)
    for (let [name, objSkill] of sorted) {
        let arrayOfSkills = Object.entries(objSkill);
        let totalSkill = arrayOfSkills.pop()[1]
        let sortedArray = arrayOfSkills.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        console.log(`${name}: ${totalSkill} skill`);

        for (let [technique, skill] of sortedArray) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}

// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Duck -> 150',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ]
// );

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    )

