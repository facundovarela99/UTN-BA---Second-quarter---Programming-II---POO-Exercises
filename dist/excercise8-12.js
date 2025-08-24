"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = exports.Visitor = exports.Person = void 0;
class Person {
    _name;
    _lastName;
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
    }
    introduceHimself() {
        return `${this._name} ${this._lastName}`;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(newLastName) {
        this._lastName = newLastName;
    }
}
exports.Person = Person;
class Visitor extends Person {
    _dniNumber;
    constructor(name, lastName, dniNumber) {
        super(name, lastName);
        this._dniNumber = dniNumber;
    }
    get dniNumber() {
        return this._dniNumber;
    }
    set dniNumber(newDniNumber) {
        this._dniNumber = newDniNumber;
    }
}
exports.Visitor = Visitor;
class Guard extends Person {
    introduceHimself() {
        return `Hello! My name is ${this.name} ${this.lastName}, and I'm the guard`;
    }
    checkDNI(fullName, VisitorDniNumber) {
        return `Go on, ${fullName} with DNI Number ${VisitorDniNumber}`;
    }
}
exports.Guard = Guard;
//# sourceMappingURL=excercise8-12.js.map