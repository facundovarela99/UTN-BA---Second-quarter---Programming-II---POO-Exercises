"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
class Article {
    _brand;
    _model;
    constructor(brand, model) {
        this._brand = brand;
        this._model = model;
    }
    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
}
exports.Article = Article;
//# sourceMappingURL=excercise3.js.map