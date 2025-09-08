"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lancha = exports.BarcoHospital = exports.Destructor = exports.Acorazado = exports.EquipoLancha = void 0;
class Navio {
    _nombre;
    _flotabilidad;
    _estabilidad;
    _velocidadMax;
    _maniobrabilidad;
    constructor(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad) {
        this._nombre = nombre;
        this._flotabilidad = flotabilidad;
        this._estabilidad = estabilidad;
        this._velocidadMax = velocidadMaxima;
        this._maniobrabilidad = maniobrabilidad;
    }
    get nombre() { return this._nombre; }
    ;
    get flotabilidad() { return this._flotabilidad; }
    ;
    get estabilidad() { return this._estabilidad; }
    ;
    get velocidadMaxima() { return this._velocidadMax; }
    ;
    get maniobrabilidad() { return this._maniobrabilidad; }
    ;
}
class EquipoLancha {
    _nombreEquipo;
    constructor(nombre) {
        this._nombreEquipo = nombre;
    }
    get equipo() {
        return this._nombreEquipo;
    }
}
exports.EquipoLancha = EquipoLancha;
class Acorazado extends Navio {
    _solidez;
    _blindaje;
    _potenciaDeFuego;
    constructor(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad, solidez, blindaje, potenciaDeFuego) {
        super(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad);
        this._solidez = solidez;
        this._blindaje = blindaje;
        this._potenciaDeFuego = potenciaDeFuego;
    }
    get solidez() { return this._solidez; }
    ;
    get blindaje() { return this._blindaje; }
    getPotenciaDeFuego() {
        return this._potenciaDeFuego;
    }
}
exports.Acorazado = Acorazado;
class Destructor extends Navio {
    _solidez;
    _potenciaDeFuego;
    constructor(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad, solidez, potenciaDeFuego) {
        super(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad);
        this._solidez = solidez;
        this._potenciaDeFuego = potenciaDeFuego;
    }
    get solidez() { return this._solidez; }
    getPotenciaDeFuego() {
        return this._potenciaDeFuego;
    }
}
exports.Destructor = Destructor;
class BarcoHospital extends Navio {
    _capacidadDeCarga = 75;
    constructor(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad) {
        super(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad);
    }
    get capacidadDeCarga() { return this._capacidadDeCarga; }
}
exports.BarcoHospital = BarcoHospital;
class Lancha extends Navio {
    _equipamiento;
    constructor(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad, equipamiento) {
        super(nombre, flotabilidad, estabilidad, velocidadMaxima, maniobrabilidad);
        this._equipamiento = equipamiento;
    }
    getEquipamiento() {
        console.log('Equipamiento de la lancha:\n');
        for (const equipo of this._equipamiento) {
            console.log(equipo.equipo);
        }
    }
}
exports.Lancha = Lancha;
//# sourceMappingURL=excercise15.js.map