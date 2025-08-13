"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    name;
    lastname;
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getLastname() {
        return this.lastname;
    }
    setLastname(lastname) {
        this.lastname = lastname;
    }
    sayHi() {
        console.log(`Hello.\nmy name is ${this.getName()} and my lastname is ${this.getLastname()}`);
    }
    getFullName() {
        return `${this.getName}, ${this.getLastname()}`;
    }
}
exports.Person = Person;
//# sourceMappingURL=personas.js.map