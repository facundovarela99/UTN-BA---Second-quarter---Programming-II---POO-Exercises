"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = exports.Cuadrado = exports.Triangulo = exports.FiguraGeometrica = void 0;
class FiguraGeometrica {
    _nombre;
    _color;
    constructor(nombre, color) {
        this._nombre = nombre;
        this._color = color;
    }
    get nombre() { return this._nombre; }
    get color() { return this._color; }
}
exports.FiguraGeometrica = FiguraGeometrica;
class Triangulo extends FiguraGeometrica {
    _lado1;
    _lado2;
    _lado3;
    constructor(nombre, color, lado1, lado2, lado3) {
        super(nombre, color);
        this._lado1 = lado1;
        this._lado2 = lado2;
        this._lado3 = lado3;
    }
    getPerimetro() {
        return this._lado1 + this._lado2 + this._lado3;
    }
    ;
    getArea() {
        return 1;
    }
    ;
}
exports.Triangulo = Triangulo;
class Cuadrado extends FiguraGeometrica {
    _lado;
    constructor(nombre, color, lado) {
        super(nombre, color);
        this._lado = lado;
    }
    get lado() {
        return this._lado;
    }
    set lado(value) {
        this._lado = value;
    }
    getPerimetro() {
        return this._lado * 4;
    }
    ;
    getArea() {
        return this._lado * this._lado;
    }
    ;
}
exports.Cuadrado = Cuadrado;
class Circulo extends FiguraGeometrica {
    _radio;
    constructor(nombre, color, radio) {
        super(nombre, color);
        this._radio = radio;
    }
    getPerimetro() { return 1; }
    ;
    getArea() { return 1; }
    ;
}
exports.Circulo = Circulo;
//# sourceMappingURL=herencia.js.map