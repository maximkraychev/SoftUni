function cats(array) {

    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (el of array) {
        [catName, age] = el.split(' ')
        let currentCat = new Cat(catName, age);
        currentCat.meow()
    }

}

cats(['Mellow 2', 'Tom 5']);