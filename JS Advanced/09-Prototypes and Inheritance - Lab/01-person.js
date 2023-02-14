function createPerson(firstName, lastName) {

    const result = {
        firstName,
        lastName,
    }

    Object.defineProperty(result, 'fullName', {
        get () {
            return `${this.firstName} ${this.lastName}`;
        },
        set (value) {
            [first, last] = value.split(' ');
            if (first !== undefined, last !== undefined) {
                this.firstName = first;
                this.lastName = last;
            }
        },
    });

    return result;
}



// let person = createPerson("Peter", "Ivanov");
// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla

let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson

