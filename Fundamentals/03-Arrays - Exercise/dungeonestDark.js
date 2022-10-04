function dungeonestDark(rooms) {

    let health = 100;
    let coins = 0;
    let areYouAlive = true;

    // From string into one array;

    let roomsIntoArray = rooms[0].split('|');

    let roomsIntoArrayLength = roomsIntoArray.length;

    // Separating the array we just made into two arrays: 
    // The first one is 'monsterOrChest' ---> containing what we found in the room (potion, chest or monster);
    // Second one is 'dmgOrHeal' ---> containing, a number and depends what we have found in the 'monsterOrChest' we should ether (heal, gain coins or take dmg);

    let finalArray = [];
    let monsterOrChest = [];
    let dmgOrHeal = [];

    for (let i = 0; i < roomsIntoArrayLength; i++) {

        finalArray.push(roomsIntoArray[i].split(' '))

        monsterOrChest.push(finalArray[i][0]);
        dmgOrHeal.push(Number(finalArray[i][1]));

    }

    ///---

    for (let room = 0; room < monsterOrChest.length; room++) {

        // If in the room have potion;

        if (monsterOrChest[room] === 'potion') {

            if (health + dmgOrHeal[room] > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
                console.log(`Current health: ${health} hp.`);
            } else {
                health += dmgOrHeal[room];
                console.log(`You healed for ${dmgOrHeal[room]} hp.`);
                console.log(`Current health: ${health} hp.`);
            }

            // If in the room is chest;

        } else if (monsterOrChest[room] === 'chest') {

            coins += dmgOrHeal[room];
            console.log(`You found ${dmgOrHeal[room]} coins.`);

            // If you face monster in room;    

        } else {

            health -= dmgOrHeal[room];

            if (health > 0) {
                console.log(`You slayed ${monsterOrChest[room]}.`);
            } else {
                console.log(`You died! Killed by ${monsterOrChest[room]}.`);
                console.log(`Best room: ${room + 1}`);
                areYouAlive = false;
                break;
            }
        }
    }

    if (areYouAlive) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);