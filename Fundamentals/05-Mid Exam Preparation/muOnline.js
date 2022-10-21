function muOnline(rooms) {
    let maxHealth = 100;
    let health = 100;
    let bitcoins = 0;
    let areYouAlive = true;

    let roomsArr = rooms.split('|');
    let currentRoom = 0;

    for (stuffInTheRoom of roomsArr) {

        currentRoom++
        let stuffInTheRoomArray = stuffInTheRoom.split(' ');
        let commnand = stuffInTheRoomArray[0];
        let numbersForTheCommand = Number(stuffInTheRoomArray[1]);

        switch (commnand) {

            case 'potion':
                if (health + numbersForTheCommand > maxHealth) {
                    let healedHealth = maxHealth - health
                    health = maxHealth;
                    console.log(`You healed for ${healedHealth} hp.`);
                } else {
                    health += numbersForTheCommand;
                    console.log(`You healed for ${numbersForTheCommand} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
                break;

            case 'chest':
                bitcoins += numbersForTheCommand
                console.log(`You found ${numbersForTheCommand} bitcoins.`);
                break;

            default:
                let monster = commnand
                health -= numbersForTheCommand;

                if (health > 0) {
                    console.log(`You slayed ${monster}.`);
                } else {
                    areYouAlive = false;
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${currentRoom}`);
                }
                break;
        }

        if (!areYouAlive) {
            break;
        }
    }

    if (areYouAlive) {
        console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    }
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");