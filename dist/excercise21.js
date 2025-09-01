"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Bank = void 0;
class Bank {
    _name;
    constructor(name) {
        this._name = name;
    }
    queryTheWebService() { }
    makeLoan(person) { }
}
exports.Bank = Bank;
class Client {
    _dni;
    _grossSalary;
    _currentJobAntiquity;
    constructor(dni, grossSalary, currentJobAntiquity) {
        this._dni = dni;
        this._grossSalary = grossSalary;
        this._currentJobAntiquity = currentJobAntiquity;
    }
    get dni() {
        return this._dni;
    }
    get grossSalary() {
        return this._grossSalary;
    }
    get currentJobAntiquity() {
        return this._currentJobAntiquity;
    }
}
exports.Client = Client;
//# sourceMappingURL=excercise21.js.map