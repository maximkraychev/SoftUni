const { expect } = require("chai");

let { Repository } = require("..solution");

describe('Repository', function () {
    describe('Constructor', () => {
        it('Should work properly with object', () => {
            const rep = new Repository({})
            expect(typeof rep.props).to.equal('object');
        });

        it('Should have data property', () => {
            const rep = new Repository({})
            expect(rep).to.haveOwnProperty('data');
        });
    });

    describe('Getter count method', () => {
        it('Should return the number of stored entity', () => {
            const rep = new Repository({});
            expect(rep.count).to.equal(0);
        });

        it('Should return the number of stored entity', () => {
            const rep = new Repository({});
            rep.data.set({});
            expect(rep.count).to.equal(1);
        });
    });

    describe('Add method', () => {
        it('Should add object to the data property', () => {
            const rep = new Repository({});
            rep.add({});
            expect(rep.data.size).to.equal(1);
        });

        it('Should add object to the data only if have the required propertys', () => {
            const rep = new Repository({ name: 'string' });
            rep.add({ name: 'Pesho' });
            expect(rep.data.size).to.equal(1);
        });

        it('Should return the ID when add method is called', () => {
            const rep = new Repository({});
            const actual = rep.add({});
            expect(actual).to.equal(0);
        });

        it('Should throw error if the entity is missing some of the required propertys', () => {
            const rep = new Repository({ name: 'string' });
            const actual = () => rep.add({ age: 1 });
            expect(actual).to.throw;
        });

        it('Should throw error if the property is present but is of incorrect type', () => {
            const rep = new Repository({ name: 'string' });
            const actual = () => rep.add({ name: 1 });
            expect(actual).to.throw;
        });
    });

    describe('getID method', () => {
        it('Should returns the entity with given ID', () => {
            const rep = new Repository({ name: 'string' });
            rep.add({ name: 'Peshu' });
            const actual = rep.getId(0);
            expect(actual.name).to.equal('Peshu');
        })
    });

    describe('Update method', () => {
        it('Should replace the entity with the given id with new one', () => {
            const rep = new Repository({ name: 'string' });
            rep.add({ name: 'Pesho' });
            rep.update(0, { name: 'Gosho' });
            expect(rep.getId(0).name).to.equal('Gosho');
        });

        it('Should throw error if the id does not exist in the data', () => {
            const rep = new Repository({});
            const actual = () => rep.update(1, {});
            expect(actual).to.throw;
        });

        it('Should throw error if the newEntity is missing some of the required propertys', () => {
            const rep = new Repository({ name: 'string' });
            rep.add({ name: 'Pesho' })
            const actual = () => rep.update(0, { age: 'Pesho' });
            expect(actual).to.throw;
        });

        it('Should throw error if the newEntity has needed property but is of incorrect type', () => {
            const rep = new Repository({ name: 'string' });
            rep.add({ name: 'Pesho' })
            const actual = () => rep.update(0, { name: 1 });
            expect(actual).to.throw;
        });
    });

    describe('del method', () => {
        it('Should deletes an entity by the given id', () => {
            const rep = new Repository({ name: 'string' });
            rep.add({ name: 'Pesho' });
            rep.del(0);
            expect(rep.data.size).to.equal(0);
        });

        it('Should throw an error if the id does not exist in the data', () => {
            const rep = new Repository({});
            const actual = () => rep.del(1);
            expect(actual).to.throw;
        });
    })
})