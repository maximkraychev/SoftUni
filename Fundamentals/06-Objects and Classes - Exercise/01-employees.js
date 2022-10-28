function employees(arayOfNames) {

    class Person {
        constructor(name, personalNumber) {
            this.name = name,
            this.personalNumber = personalNumber
        }
        // printInfromation() {
        //     console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
        // }
    }

    let arrayOfPeople = [];

    for (name of arayOfNames) {
        nameLength = name.length;
        arrayOfPeople.push(new Person(name, nameLength));
    }

    for (currentPerson of arrayOfPeople) {
        console.log(`Name: ${currentPerson.name} -- Personal Number: ${currentPerson.personalNumber}`);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );

    employees([
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
        ]
        )