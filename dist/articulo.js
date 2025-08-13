"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
class Articulo {
    marca;
    modelo;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    setModelo(modelo) {
        this.marca = this.marca;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
}
exports.Articulo = Articulo;
//# sourceMappingURL=articulo.js.map