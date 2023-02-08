const Bag = require('./Bag');

class Person {
    constructor(name) {
        this.name = name;
        this.bags = [];
    }

    addBag(weight) {
        this.bags.push(new Bag(weight));
    }
}

module.exports = Person;