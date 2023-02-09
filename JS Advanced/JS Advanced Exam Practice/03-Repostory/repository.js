class Repository {
    #id
    constructor(object) {
        this.props = object;
        this.data = new Map();
        this.#id = 0;
    }

    get count() {
        return this.data.size;
    }

    #check(entity) {
        const keys = Object.keys(this.props);
        for (const key of keys) {
            if (entity.hasOwnProperty(key) == false) {
                throw new Error(`Property ${key} is missing from the entity!`);
            } else if (typeof entity[key] !== this.props[key]) {
                throw new TypeError(`Property ${key} is of incorrect type!`);
            }
        }
    }

    add(entity) {
        this.#check(entity);
        this.data.set(this.#id, entity);
        return this.#id++;
    }

    getId(id) {
        return this.data.get(id);
    }

    update(id, newEntity) {
        if (this.data.has(id) == false) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this.#check(newEntity);
        this.data.set(id, newEntity);
    }

    del(id) {
        if(this.data.has(id) == false) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        this.data.delete(id);
    }
}

module.exports = Repository;


let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
let repository = new Repository(properties);
let entity = {
    name: "Pesho",
    age: 22,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity);
repository.add(entity);
console.log(repository.getId(0));
console.log(repository.getId(1));
entity = {
    name: 'Gosho',
    age: 22,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.getId(1));
repository.del(0);
console.log(repository.count);

