"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elemento = exports.Vehiculo = void 0;
class Vehiculo {
    tipo;
    elementosCargados;
    listaElementos;
    capacidadCarga;
    constructor(tipo, elementosCargados = 0, listaElementos, capacidadCarga) {
        this.tipo = tipo;
        this.elementosCargados = elementosCargados;
        this.listaElementos = [];
        this.capacidadCarga = capacidadCarga;
    }
    getTipoVehiculo() {
        return this.tipo;
    }
    getElementosCargados() {
        return `Elementos cargados: ${this.elementosCargados}`;
    }
    cargarElemento(elemento) {
        this.listaElementos.push(elemento);
        this.elementosCargados++;
        this.capacidadCarga--;
        console.log(`Elemento "${elemento.getTipoElemento()}" cargado`);
    }
    listarElementos() {
        for (let i = 0; i < this.listaElementos.length; i++) {
            console.log(`\nElemento ${i + 1}`);
            console.log(this.listaElementos[i].getID());
            console.log(this.listaElementos[i].getTipoElemento());
            console.log(this.listaElementos[i].getDimensiones());
        }
    }
    getCapacidadCarga() {
        return `Capacidad de carga del vehículo tipo ${this.tipo}: ${this.capacidadCarga} elementos`;
    }
}
exports.Vehiculo = Vehiculo;
class Elemento {
    id;
    descripcion;
    dimensiones;
    constructor(id, descripcion, dimensiones) {
        this.id = id;
        this.descripcion = descripcion;
        this.dimensiones = dimensiones;
    }
    getID() {
        return `ID: ${this.id}`;
    }
    getTipoElemento() {
        return this.descripcion;
    }
    getDimensiones() {
        return `Dimensiones ${this.dimensiones}`;
    }
}
exports.Elemento = Elemento;
//# sourceMappingURL=excercise16.js.map