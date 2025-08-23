"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    brand;
    model;
    _patentNumber;
    constructor(brand, model, patentNumber) {
        this.brand = brand;
        this.model = model;
        this._patentNumber = patentNumber;
    }
    get patentNumber() {
        return this._patentNumber;
    }
}
exports.Vehicle = Vehicle;
//# sourceMappingURL=excercise2.js.map