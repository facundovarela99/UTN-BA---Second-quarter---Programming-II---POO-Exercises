"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sistemaDeTraccion = exports.Robot = void 0;
class Robot {
    numero_serie;
    potencia_traccion;
    traccion;
    constructor(numero_serie, potencia_traccion, traccion) {
        this.numero_serie = numero_serie;
        this.potencia_traccion = potencia_traccion;
        this.traccion = traccion;
    }
    get NroSerie() {
        return this.numero_serie;
    }
    potenciaTraccionFinal(tipo_traccion) {
        if (tipo_traccion === 'Oruga') {
            return this.potencia_traccion - 3;
        }
        else if (tipo_traccion === 'Rueda de caucho') {
            return this.potencia_traccion - 1;
        }
    }
    getSistemaTraccion(tipo_traccion) {
        if (tipo_traccion === 'Rueda de caucho') {
            console.log(`Robot con sistema de traccion ${tipo_traccion}. Puede avanzar hasta 100km antes de su reemplazo.`);
        }
        else if (tipo_traccion === 'Oruga') {
            console.log(`Robot con sistema de traccion ${tipo_traccion}. Puede avanzar hasta 400km antes de su reemplazo e incorpora sensores Meke-M0 que le permiten conocer temperatura.`);
        }
    }
}
exports.Robot = Robot;
class sistemaDeTraccion {
    tipo;
    kilometraje_permitido;
    sensores;
    constructor(tipo) {
        this.tipo = tipo;
    }
    asignar_propiedades() {
        if (this.tipo === 'Rueda de caucho') {
            this.kilometraje_permitido = 100;
        }
        else if (this.tipo === 'Oruga') {
            this.kilometraje_permitido = 400;
            this.sensores = true;
        }
    }
    get TipoTraccion() {
        return this.tipo;
    }
}
exports.sistemaDeTraccion = sistemaDeTraccion;
//# sourceMappingURL=excercise13.js.map