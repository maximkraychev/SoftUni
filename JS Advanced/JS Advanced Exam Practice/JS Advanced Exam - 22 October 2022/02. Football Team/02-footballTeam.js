class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        for (const currentPlayer of footballPlayers) {
            let [name, age, playerValue] = currentPlayer.split('/');
            const index = this.invitedPlayers.findIndex(x => x.name === name);

            if (index === -1) {
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue,
                });

            } else if (Number(playerValue) > Number(this.invitedPlayers[index].playerValue)) {
                this.invitedPlayers[index].playerValue = playerValue;
            }
        }
        const players = this.invitedPlayers.map(x => x.name);
        return `You successfully invite ${players.join(', ')}.`
    }

    signContract(selectedPlayer) {
        const [name, playerOffer] = selectedPlayer.split('/');
        const index = this.invitedPlayers.findIndex(x => x.name === name);

        if (index === -1) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (Number(playerOffer) < Number(this.invitedPlayers[index].playerValue)) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${Number(this.invitedPlayers[index].playerValue) - Number(playerOffer)} million more are needed to sign the contract!`);
        }

        this.invitedPlayers[index].playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const index = this.invitedPlayers.findIndex(x => x.name === name);

        if (index === -1) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        const ageDifference = age - Number(this.invitedPlayers[index].age);

        if (ageDifference <= 0) {
            return `${name} is above age limit!`;
        } else if (ageDifference < 5) {
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        } else {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
    }

    transferWindowResult() {
        let playerList = 'Players list:';
        this.invitedPlayers.forEach(x => playerList += `\nPlayer ${x.name}-${x.playerValue}`);
        return playerList;
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/200", "Pau Torres/25/52", "Kylian Mbappé/23/170"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());




