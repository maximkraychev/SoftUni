console.log('test');

let username: String = 'Pesho';

let arr: Boolean[] = [true, false];



function createUser(username: String, age?: Number) {    // With ? literal here the age varible is not required;
    return {
        username,
        age
    };
}

const user = createUser('Pesho', 20);




function person<T>(person: T): T {   //  Generics
    return person;
}

interface IPerson {
    name: string,
    age: number
}

let pesho = person<IPerson | string>({ name: 'Pesho', age: 20 }); // It can be IPerson or string;


type MyPerson = IPerson | string;  //type
let gosho = person<MyPerson>('Gosho');



class MyClass {
    constructor(public name: string, private age: number) {    
        // public is like 'this.name = name' in the construcor;
        // private is like 'this.__age__ = age' and should not be used outside of the class;
    }
}

const ivan = new MyClass('Ivan', 20); 