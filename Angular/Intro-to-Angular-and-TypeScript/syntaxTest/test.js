console.log('test');
var username = 'Pesho';
var arr = [true, false];
function createUser(username, age) {
    return {
        username: username,
        age: age
    };
}
var user = createUser('Pesho', 20);
function person(person) {
    return person;
}
var pesho = person({ name: 'Pesho', age: 20 }); // It can be IPerson or string;
var gosho = person('Gosho');
var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
        // public is like 'this.name = name' in the construcor;
        // private is like 'this.__age__ = age' and should not be used outside of the class;
    }
    return MyClass;
}());
var ivan = new MyClass('Ivan', 20);
