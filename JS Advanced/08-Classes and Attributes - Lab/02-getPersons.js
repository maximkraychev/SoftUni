function getPersons() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    const arrPersons = [];
    arrPersons.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    arrPersons.push(new Person('SoftUni'));
    arrPersons.push(new Person('Stephan', 'Johnson', 25));
    arrPersons.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return arrPersons;
}

console.log(getPersons());