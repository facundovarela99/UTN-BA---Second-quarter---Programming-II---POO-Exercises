"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto = exports.Scanner = void 0;
class Scanner {
    escaneo(objeto) {
        console.log(`Tipo de objeto: ${objeto.getTipo()}`);
        console.log(`Material: ${objeto.getMaterial()}`);
        console.log(`Volumen: ${objeto.getVolumen()}`);
        (objeto.getTipo() === 'Contenedor' || objeto.getTipo() === 'Sambuchito')
            ? console.log(objeto.getContenido())
            : console.log('El objeto no posee contenido');
    }
}
exports.Scanner = Scanner;
class Objeto {
    tipo;
    material;
    volumen;
    contenido;
    constructor(tipo, material, volumen, contenido) {
        this.tipo = tipo;
        this.material = material;
        this.volumen = volumen;
        this.contenido = contenido;
    }
    getTipo() {
        return this.tipo;
    }
    getMaterial() {
        return this.material;
    }
    getVolumen() {
        return this.volumen;
    }
    getContenido() {
        if (this.contenido.length > 0) {
            return this.contenido;
        }
        else {
            return `El objeto no posee contenido.`;
        }
    }
}
exports.Objeto = Objeto;
//# sourceMappingURL=excercise17.js.map