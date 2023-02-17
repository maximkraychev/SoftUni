class VeterinaryClinic {
    constructor(clinicName, capacity,) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.capacity == this.currentWorkload) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }

        const owner = this.clients.find(x => x.hasOwnProperty(ownerName));
        if (owner == undefined) {
            const client = {
                [ownerName]:
                {
                    [petName]:
                    {
                        'kind': kind.toLowerCase(),
                        'procedures': procedures,
                    }
                }

            }
            this.clients.push(client);
            this.currentWorkload++;
            return `Welcome ${petName}!`;

        } else if (owner[ownerName].hasOwnProperty(petName) == false) {
            owner[ownerName][petName] = { 'kind': kind.toLowerCase(), 'procedures': procedures };
            this.currentWorkload++;
            return `Welcome ${petName}!`;

        } else if (owner[ownerName].hasOwnProperty(petName) == true) {

            if (owner[ownerName][petName]['procedures'].length > 0) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${owner[ownerName][petName]['procedures'].join(', ')}.`);

            } else if (owner[ownerName][petName]['procedures'].length == 0) {
                owner[ownerName][petName]['procedures'] = procedures;
                this.currentWorkload++;
                return `Welcome ${petName}!`;
            }
        }
    }

    onLeaving(ownerName, petName) {
        const owner = this.clients.find(x => Object.keys(x)[0] == ownerName);
        if (owner == undefined) {
            throw new Error('Sorry, there is no such client!');
        }

        if (owner[ownerName].hasOwnProperty(petName) == false || owner[ownerName][petName].procedures.length == 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        this.totalProfit += owner[ownerName][petName].procedures.length * 500;
        this.currentWorkload--;
        owner[ownerName][petName].procedures = [];
        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        let finalString = `${this.clinicName} is ${Math.floor((this.currentWorkload / this.capacity) * 100)}% busy today!`;
        finalString += `\nTotal profit: ${this.totalProfit.toFixed(2)}$`;


        const sortedByOwners = this.clients.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
        sortedByOwners.forEach(x => {
            const personName = Object.keys(x)[0];
            finalString += `\n${personName} with:`;
            const entries = Object.entries(x[personName]);
            const sortedByPetName = entries.sort((a, b) => a[0].localeCompare(b[0]));

            sortedByPetName.forEach(x => {
                const petName = x[0];
                const animalProp = x[1];
                finalString += `\n---${petName} - a ${animalProp.kind} that needs: ${animalProp.procedures.join(', ')}`;
            });

        })
        return finalString;
    }
}

// const test = new VeterinaryClinic('test', 5);
// test.newCustomer('Pesho');

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());

