const { expect } = require("chai");

let { Repository } = require("../solution");

describe('Repository', function () {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };

    describe('Constructor', () => {
        it('Should have property props', () => {
            const rep = new Repository(properties);
            expect(rep).to.haveOwnProperty('props');
            expect(rep.props).to.be.instanceof(Object);
        });

        it('Should have all property from the given object', () => {
            const rep = new Repository(properties);
            expect(rep.props).to.haveOwnProperty('name');
            expect(rep.props).to.haveOwnProperty('age');
            expect(rep.props).to.haveOwnProperty('birthday');   
        });

        it('Should have data property that is Map', () => {
            const rep = new Repository(properties);
            expect(rep).to.haveOwnProperty('data');
            expect(rep.data).to.be.instanceof(Map);
        });

        it('Should have nextId property that is Function', () => {
            const rep = new Repository(properties);
            expect(rep).to.haveOwnProperty('nextId');
            expect(rep.nextId).to.be.instanceof(Function);
        });
    });

    describe('Add method', () => {
        it('Should return the id', () => {
            const rep = new Repository(properties);
            expect(rep.add(entity)).to.equal(0);
            expect(rep.add(entity)).to.equal(1);
            expect(rep.add(entity)).to.equal(2);
        });

        it('Should add entity to the data with coresponding id', () => {
            const rep = new Repository(properties);
            rep.add(entity);
            expect(entity).to.deep.equal(rep.data.get(0));
            rep.add(entity);
            expect(entity).to.deep.equal(rep.data.get(1));
            rep.add(entity);
            expect(entity).to.deep.equal(rep.data.get(2));
        });

        it('Should throw error when entity does not have all property of props', () => {
            const rep = new Repository(properties);
            expect(() => rep.add({})).to.throw(Error, 'Property name is missing from the entity!')
            expect(() => rep.add({ name: "Pesho", age: 22 })).to.throw(Error, 'Property birthday is missing from the entity!');
            expect(() => rep.add({ name: "Pesho", birthday: new Date(1998, 0, 7) })).to.throw(Error, 'Property age is missing from the entity!');
            expect(() => rep.add({ age: 22, birthday: new Date(1998, 0, 7) })).to.throw(Error, 'Property name is missing from the entity!');

        });

        it('Should throw error when entity have the property but they are not from the correct type', () => {
            const rep = new Repository(properties);
            expect(() => rep.add({ name: 1, age: 22, birthday: new Date(1998, 0, 7) })).to.throw(TypeError, 'Property name is not of correct type!');
            expect(() => rep.add({ name: "Pesho", age: '22', birthday: new Date(1998, 0, 7) })).to.throw(TypeError, 'Property age is not of correct type!');
            expect(() => rep.add({ name: "Pesho", age: 22, birthday: "1998-01-06T22:00:00.000Z" })).to.throw(TypeError, 'Property birthday is not of correct type!');
        });

        it('Should throw error when there are more property in entity then in prop', () => {
            const rep = new Repository(properties);
            expect(() => rep.add({ name: "Pesho", age: 22, birthday: new Date(1998, 0, 7), test: 'test' })).to.throw(TypeError, 'Property test is not of correct type!');
            expect(() => rep.add({ test1: 1, name: "Pesho", age: 22, birthday: new Date(1998, 0, 7), test2: 'test' })).to.throw(TypeError, 'Property test1 is not of correct type!');
        });
    });

    describe('Getter count method', () => {
        it('Should return the size of the data', () => {
            const rep = new Repository(properties);
            expect(rep.count).to.equal(0);
            rep.add(entity);
            expect(rep.count).to.equal(1);
            rep.add(entity);
            expect(rep.count).to.equal(2);
        });
    });

    describe('getID method', () => {
        it('Should return object from data', () => {
            const rep = new Repository(properties);

            let entity2 = { name: "Gosho", age: 30, birthday: new Date(1999, 0, 7) };
            let entity3 = { name: "Mariika", age: 24, birthday: new Date(1997, 0, 7) };
            rep.add(entity);
            rep.add(entity2);
            rep.add(entity3);
            expect(rep.getId(0)).to.deep.equal(entity);
            expect(rep.getId(1)).to.deep.equal(entity2);
            expect(rep.getId(2)).to.deep.equal(entity3);
        });

        it('Should throw error if the data property dont have the id', () => {
            const rep = new Repository(properties);
            expect(() => rep.getId(0)).to.throw(Error, 'Entity with id: 0 does not exist!');
            expect(() => rep.getId(1)).to.throw(Error, 'Entity with id: 1 does not exist!');
            rep.add(entity);
            expect(() => rep.getId(1)).to.throw(Error, 'Entity with id: 1 does not exist!');
        });
    });

    describe('Update method', () => {
        it('Shuuld update the data property', () => {
            const rep = new Repository(properties);
            let entity2 = {
                name: "Gosho",
                age: 30,
                birthday: new Date(1997, 0, 7)
            };

            rep.add(entity);
            rep.update(0, entity2);
            expect(rep.data.get(0)).to.deep.equal(entity2);

            rep.add(entity);
            rep.update(1, entity2);
            expect(rep.data.get(1)).to.deep.equal(entity2);
        });

        it('Should throw error if the data property dont have the id', () => {
            const rep = new Repository(properties);
            expect(() => rep.update(0, {})).to.throw(Error, 'Entity with id: 0 does not exist!');
            rep.add(entity);
            expect(() => rep.update(1, {})).to.throw(Error, 'Entity with id: 1 does not exist!');
        });

        it('Should throw error when entity does not have all property of props', () => {
            const rep = new Repository(properties);
            rep.add(entity);
            expect(() => rep.update(0, {})).to.throw(Error, 'Property name is missing from the entity!')
            expect(() => rep.update(0, { name: "Pesho", age: 22 })).to.throw(Error, 'Property birthday is missing from the entity!');
            expect(() => rep.update(0, { name: "Pesho", birthday: new Date(1998, 0, 7) })).to.throw(Error, 'Property age is missing from the entity!');
            expect(() => rep.update(0, { age: 22, birthday: new Date(1998, 0, 7) })).to.throw(Error, 'Property name is missing from the entity!');

        });

        it('Should throw error when entity have the property but they are not from the correct type', () => {
            const rep = new Repository(properties);
            rep.add(entity);
            expect(() => rep.update(0, { name: 1, age: 22, birthday: new Date(1998, 0, 7) })).to.throw(TypeError, 'Property name is not of correct type!');
            expect(() => rep.update(0, { name: "Pesho", age: '22', birthday: new Date(1998, 0, 7) })).to.throw(TypeError, 'Property age is not of correct type!');
            expect(() => rep.update(0, { name: "Pesho", age: 22, birthday: "1998-01-06T22:00:00.000Z" })).to.throw(TypeError, 'Property birthday is not of correct type!');
        });

        it('Should throw error when there are more property in entity then in prop', () => {
            const rep = new Repository(properties);
            rep.add(entity);
            expect(() => rep.update(0, { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7), test: 'test' })).to.throw(TypeError, 'Property test is not of correct type!');
            expect(() => rep.update(0, { test1: 1, name: "Pesho", age: 22, birthday: new Date(1998, 0, 7), test2: 'test' })).to.throw(TypeError, 'Property test1 is not of correct type!');
        });
    });

    describe('Delete method', () => {
        it('Should delete the property with the given id', () => {
            const rep = new Repository(properties);
            rep.add(entity); // id:0
            rep.add(entity); // id:1
            rep.del(0);
            expect(rep.data).to.not.haveOwnProperty(0);
            rep.add(entity) // id:2
            rep.del(1);
            expect(rep.data).to.not.haveOwnProperty(1);
            rep.del(2);
            expect(rep.data).to.not.haveOwnProperty(2);
        });

        it('Should throw error if the data property dont have the id', () => {
            const rep = new Repository(properties);
            expect(() => rep.del(-1)).to.throw(Error, 'Entity with id: -1 does not exist!');
            expect(() => rep.del(0)).to.throw(Error, 'Entity with id: 0 does not exist!');
            expect(() => rep.del(1)).to.throw(Error, 'Entity with id: 1 does not exist!');
            rep.add(entity);
            expect(() => rep.del(1)).to.throw(Error, 'Entity with id: 1 does not exist!');
        });
    });
});