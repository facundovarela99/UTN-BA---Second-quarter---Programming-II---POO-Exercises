"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oruga = exports.RuedaDeCaucho = exports.Robot = void 0;
class Robot {
    _numeroSerie;
    _potenciaTraccionBase;
    _traccion;
    constructor(numeroSerie = "KT-2020-P", potenciaTraccionBase = 10, traccion) {
        this._numeroSerie = numeroSerie;
        this._potenciaTraccionBase = potenciaTraccionBase;
        this._traccion = traccion;
    }
    get numeroSerie() { return this._numeroSerie; }
    ;
    get potenciaTraccionBase() { return this._potenciaTraccionBase; }
    ;
    setTraccion(sistemaDeTraccion) { this._traccion = sistemaDeTraccion; }
    ;
    getTraccion() { return this._traccion?.nombre; }
    ;
    mostrarDatos() {
        console.log("Datos del robot KT-2020:\n");
        console.log(`N° de serie: ${this._numeroSerie}.\nPotencia Traccion base: ${this._potenciaTraccionBase}.\n`);
        if (this._traccion) {
            console.log(`Sistema de tracción: ${this._traccion?.nombre} .Datos del sistema de traccion:\n${this.getTraccion()}`);
        }
        console.log('El robot no cuenta actualmente con un sistema de traccion.');
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
    mostrarDatos() {
        return `Nombre: ${this.nombre}.\n
        Rodado: ${this.rodado}.\n
        Sensores: ${this.poseeSensores()}.\n
        Potencia de tracción final: ${this.calculoPotenciaTraccionFinal}`;
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
    mostrarDatos() {
        return `Nombre: ${this.nombre}.\n
                Rodado: ${this.rodado}.\n 
                Sensores: ${this.poseeSensores()}.\n
                Potencia de tracción final: ${this.calculoPotenciaTraccionFinal} restados al PTB`;
    }
}
exports.Oruga = Oruga;
//# sourceMappingURL=excercise13.js.map