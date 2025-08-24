"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ninja = void 0;
class Ninja {
    _martialArt;
    _weapon;
    _jump;
    constructor(martialArt, weapon, jump) {
        this._martialArt = martialArt;
        this._weapon = weapon;
        this._jump = jump;
    }
    get martialArt() {
        return this._martialArt;
    }
    set martialArt(newMartialArt) {
        this._martialArt = newMartialArt;
    }
    get weapon() {
        return this._weapon;
    }
    set weapon(newWeapon) {
        this._weapon = newWeapon;
    }
    get jump() {
        return this._jump;
    }
    hop(multiplier) {
        return `Jumping: ${this._jump * multiplier} mts!`;
    }
    attack() {
        return `Weapon: ${this._weapon}\nMartial Art: ${this._martialArt}`;
    }
}
exports.Ninja = Ninja;
//# sourceMappingURL=excercise7.js.map