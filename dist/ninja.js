"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ninja = void 0;
class Ninja {
    arteMarcial;
    arma;
    fuerza;
    salto;
    constructor(arteMarcial, arma, fuerza, salto) {
        this.arteMarcial = arteMarcial;
        this.arma = arma;
        this.fuerza = fuerza;
        this.salto = salto;
    }
    setArteMarcial(arteMarcial) {
        this.arteMarcial = arteMarcial;
    }
    setArma(arma) {
        this.arma = arma;
    }
    setFuerza(fuerza) {
        this.fuerza = fuerza;
    }
    setSalto(salto) {
        this.salto = salto;
    }
    getArteMarcial() {
        return this.arteMarcial;
    }
    getArma() {
        return this.arma;
    }
}
exports.Ninja = Ninja;
//# sourceMappingURL=ninja.js.map