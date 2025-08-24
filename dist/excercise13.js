"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TractionSystem = exports.Robot = void 0;
class Robot {
    _serialNumber;
    _basePowerTraction;
    _finalPowerTraction;
    _tractionSystem;
    constructor(serialNumber, powerTraction, traction) {
        this._serialNumber = serialNumber;
        this._basePowerTraction = powerTraction;
        this._tractionSystem = traction;
    }
    get serialNumber() {
        return this._serialNumber;
    }
    get basePowerTraction() {
        return this._basePowerTraction;
    }
    get typeTraction() {
        return this._tractionSystem;
    }
    advance(hpUsed) {
        if (this._tractionSystem.name === 'Rubber Wheel') {
            console.log('It can advance until 100km before beign replaced');
            this._finalPowerTraction = this._basePowerTraction - hpUsed;
            return `Final traction power: ${this._finalPowerTraction}`;
        }
        else if (this._tractionSystem.name === 'Catterpillar') {
            console.log('It can advance until 400km before beign replaced');
            this._finalPowerTraction = this._basePowerTraction - hpUsed;
            return `Final traction power: ${this._finalPowerTraction}`;
        }
    }
}
exports.Robot = Robot;
class TractionSystem {
    _name;
    _sensors;
    constructor(name, sensors = false, hp) {
        this._name = name;
        this._sensors = sensors;
    }
    get name() {
        return this._name;
    }
    get sensors() {
        if (this._sensors) {
            return this._sensors;
        }
        return undefined;
    }
    HpUse(name) {
        if (name.toLowerCase() === 'Rubber Wheel'.toLowerCase()) {
            return 1;
        }
        else if (name.toLowerCase() === 'Catterpillar'.toLowerCase()) {
            return 3;
        }
        return 0;
    }
}
exports.TractionSystem = TractionSystem;
//# sourceMappingURL=excercise13.js.map