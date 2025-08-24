"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruit = void 0;
class Fruit {
    _colour;
    _weight;
    _itsSeasonal;
    constructor(colour, weight, itsSeasonal) {
        this._colour = colour;
        this._weight = weight;
        this._itsSeasonal = itsSeasonal;
    }
    set colour(newColour) {
        this._colour = newColour;
    }
    get colour() {
        return this._colour;
    }
    set weight(newWeight) {
        this._weight = newWeight;
    }
    get weight() {
        return this._weight;
    }
    get itsSeasonal() {
        return this._itsSeasonal;
    }
    itsEadible() {
        return this._weight <= 200 && this._itsSeasonal;
    }
}
exports.Fruit = Fruit;
//# sourceMappingURL=excercise6.js.map