class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp.hasOwnProperty(condition) == false) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        for (const el of this.listOfParticipants) {
            if (el.name == name) {
                return `The ${name} is already registered at the camp.`;
            }
        }

        if (Number(money) < Number(this.priceForTheCamp[condition])) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        const currentParticipant = {
            name,
            condition,
            power: 100,
            wins: 0,
        }
        this.listOfParticipants.push(currentParticipant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            const currentParticipant = this.listOfParticipants[0].name;
            if (currentParticipant == name) {
                this.listOfParticipants.splice(i, 1);
                return `The ${name} removed successfully.`;
            }
        };

        throw new Error(`The ${name} is not registered in the camp.`);
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'WaterBalloonFights') {
            const playerOne = this.listOfParticipants.filter(x => x.name == participant1)[0];
            const playerTwo = this.listOfParticipants.filter(x => x.name == participant2)[0];

            if (!playerOne || !playerTwo) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (playerOne.condition != playerTwo.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (playerOne.power > playerTwo.power) {
                playerOne.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`;
            } else if (playerOne.power < playerTwo.power) {
                playerTwo.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`;
            }

            return `There is no winner.`;
        }

        if (typeOfGame == 'Battleship') {
            const player = this.listOfParticipants.filter(x => x.name == participant1)[0];
            if (!player) {
                throw new Error(`Invalid entered name/s.`);
            }
            player.power += 20;
            return `The ${player.name} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let finalString = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;

        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(el => finalString += `\n${el.name} - ${el.condition} - ${el.power} - ${el.wins}`);

        return finalString;
    }
}


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



