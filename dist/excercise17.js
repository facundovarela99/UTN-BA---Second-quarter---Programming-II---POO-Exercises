"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto = exports.Scanner = void 0;
class Scanner {
    escaneo(objeto) {
        console.log(`Descripcion: ${objeto.getDescripcion()}`);
        console.log(`Tipo de objeto: ${objeto.getTipo()}`);
        console.log(`Material: ${objeto.getMaterial()}`);
        console.log(`Volumen: ${objeto.getVolumen()}\n`);
        if (objeto.getTipo() === 'Contenedor' || objeto.getTipo() === 'Sambuchito') {
            if (objeto.getContenido().length > 0) {
                console.log("Contenido: \n");
                objeto.getContenido().forEach((contenidoObj) => {
                    this.escaneo(contenidoObj);
                });
            }
        }
    }
}
exports.Scanner = Scanner;
class Objeto {
    tipo;
    descripcion;
    material;
    volumen;
    contenido;
    constructor(tipo, descripcion, material, volumen, contenido) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.material = material;
        this.volumen = volumen;
        this.contenido = contenido;
    }
    getTipo() {
        return this.tipo;
    }
    getDescripcion() {
        return this.descripcion;
    }
    getMaterial() {
        return this.material;
    }
    getVolumen() {
        return this.volumen;
    }
    getContenido() {
        return this.contenido;
    }
}
exports.Objeto = Objeto;
//# sourceMappingURL=excercise17.js.map