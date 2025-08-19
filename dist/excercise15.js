"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barco = void 0;
class Barco {
    tipo_navio;
    nombre;
    velocidad;
    capacidadDeCarga;
    flotabilidad;
    estabilidad;
    constructor(tipo_navio, nombre, velocidad, capacidad_carga, flotabilidad, estabilidad) {
        this.tipo_navio = tipo_navio;
        this.nombre = nombre;
        this.velocidad = velocidad;
        this.capacidadDeCarga = capacidad_carga;
        this.flotabilidad = flotabilidad;
        this.estabilidad = estabilidad;
    }
    getTipoNavio() {
        return this.tipo_navio;
    }
    getNombre() {
        return this.nombre;
    }
    getVelocidad() {
        return this.velocidad;
    }
    getCapacidadCarga() {
        return this.capacidadDeCarga;
    }
    getFlotabilidad() {
        return this.flotabilidad;
    }
    getEstabilidad() {
        return this.estabilidad;
    }
}
exports.Barco = Barco;
//# sourceMappingURL=excercise15.js.map