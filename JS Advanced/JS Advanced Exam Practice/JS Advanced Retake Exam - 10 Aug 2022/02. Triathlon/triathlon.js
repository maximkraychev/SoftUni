class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        }

        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (this.participants.hasOwnProperty(participantName) == false) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        const completedCount = Math.floor(condition / 30);

        if (completedCount <= 2) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }

        this.listOfFinalists.push({ [participantName]: this.participants[participantName] });
        delete this.participants[participantName];
        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        if (this.listOfFinalists.find(x => x[participantName])) {
            return `${participantName} was rewarded with a trophy for his performance`;
        }
        return `${participantName} is not in the current finalists list`;
    }

    showRecord(criteria) {
        if (this.listOfFinalists.length == 0) {
            return `There are no finalists in this competition`;
        }

        if (criteria !== 'all') {
            const filterdList = this.listOfFinalists.filter(x => Object.values(x)[0] === criteria);
            if (filterdList.length == 0) {
                return `There are no ${criteria}'s that finished the competition`
            }

            const firstParticipant = Object.keys(filterdList[0]);
            return `${firstParticipant} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }

        let stringWithAllFinalists = `List of all ${this.competitionName} finalists:`
        this.listOfFinalists.forEach(x => stringWithAllFinalists += `\n${Object.keys(x)[0]}`);
        return stringWithAllFinalists;
    }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));





