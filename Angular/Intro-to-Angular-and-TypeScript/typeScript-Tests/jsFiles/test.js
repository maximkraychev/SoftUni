console.log('test');
let username = 'Pesho';
let arr = [true, false];
function createUser(username, age) {
    return {
        username,
        age
    };
}
const user = createUser('Pesho', 20);
function person(person) {
    return person;
}
let pesho = person({ name: 'Pesho', age: 20 }); // It can be IPerson or string;
let gosho = person('Gosho');
class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // public is like 'this.name = name' in the construcor;
        // private is like 'this.__age__ = age' and should not be used outside of the class;
    }
}
const ivan = new MyClass('Ivan', 20);
//# sourceMappingURL=test.js.map