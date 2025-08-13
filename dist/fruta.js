"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruta = void 0;
class Fruta {
    color;
    peso;
    esEstacional;
    constructor(color, peso, esEstacional) {
        this.color = color;
        this.peso = peso;
        this.esEstacional = esEstacional;
    }
    esComestible() {
        if (parseInt(this.peso) < 200 && this.esEstacional === true) {
            return true;
        }
        return false;
    }
}
exports.Fruta = Fruta;
//# sourceMappingURL=fruta.js.map