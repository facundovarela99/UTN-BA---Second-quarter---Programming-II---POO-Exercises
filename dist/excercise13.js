"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oruga = exports.RuedaDeCaucho = exports.Robot = void 0;
class Robot {
    _numeroSerie;
    _potenciaTraccionBase;
    _traccion;
    _poseeSistemaTraccion = false;
    constructor(numeroSerie = "KT-2020-P", potenciaTraccionBase = 10, traccion, poseeSistemaTraccion = false) {
        this._numeroSerie = numeroSerie;
        this._potenciaTraccionBase = potenciaTraccionBase;
        this._traccion = traccion;
        this._poseeSistemaTraccion = poseeSistemaTraccion;
    }
    get numeroSerie() { return this._numeroSerie; }
    ;
    get potenciaTraccionBase() { return this._potenciaTraccionBase; }
    ;
    get poseeSistemaTraccion() { return this._poseeSistemaTraccion; }
    ;
    setTraccion(sistemaDeTraccion) {
        this._traccion = sistemaDeTraccion;
        this._poseeSistemaTraccion = true;
    }
    ;
    mostrarDatos() {
        console.log("Datos del robot KT-2020:\n");
        console.log(`N° de serie: ${this._numeroSerie}.\nPotencia Traccion base: ${this.potenciaTraccionBase}.`);
        if (this.poseeSistemaTraccion) {
            console.log(`\nDatos del sistema de tracción: ${this._traccion?.mostrarDatos(this._potenciaTraccionBase)}.`);
        }
        else {
            console.log('El robot no cuenta actualmente con un sistema de traccion.');
        }
    }
}
exports.Robot = Robot;
class SistemaTraccion {
    _nombre;
    _rodado;
    _sensores;
    constructor(nombre, rodado, sensores) {
        this._nombre = nombre;
        this._rodado = rodado;
        this._sensores = sensores;
    }
    get nombre() {
        return this._nombre;
    }
    get rodado() {
        return this._rodado;
    }
    poseeSensores() {
        return this._sensores;
    }
}
class RuedaDeCaucho extends SistemaTraccion {
    constructor(nombre = 'Rueda de caucho', rodado = 100, sensores = false) {
        super(nombre, rodado, sensores);
    }
    calculoPotenciaTraccionFinal(potenciaTraccionBaseRobot) {
        return potenciaTraccionBaseRobot - 1;
    }
    mostrarDatos(ptb) {
        return `
            Rodado: ${this.rodado}\n
            Posee sensores Meke-40: ${this.poseeSensores()}\n
            Potencia tracción final: ${this.calculoPotenciaTraccionFinal(ptb)}
            Info adicional: Puede avanzar hasta 100km hasta su reemplazo.
        `;
    }
}
exports.RuedaDeCaucho = RuedaDeCaucho;
class Oruga extends SistemaTraccion {
    constructor(nombre = "Oruga", rodado = 400, sensores = true) {
        super(nombre, rodado, sensores);
    }
    calculoPotenciaTraccionFinal(potenciaTraccionBaseRobot) {
        return potenciaTraccionBaseRobot - 3;
    }
    mostrarDatos(ptb) {
        return `
            Rodado: ${this.rodado}\n
            Posee sensores Meke-40: ${this.poseeSensores()}\n
            Potencia tracción final: ${this.calculoPotenciaTraccionFinal(ptb)}
            Info adicional: Puede avanzar hasta 400km hasta su reemplazo.
        `;
    }
}
exports.Oruga = Oruga;
//# sourceMappingURL=excercise13.js.map