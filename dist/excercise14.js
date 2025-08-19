"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Herramienta = exports.Dron = void 0;
class Dron {
    velocidad;
    altura;
    peso_total;
    cantidad_herramientas;
    herramientas;
    constructor(velocidad = 100, altura = 100, peso_total = 0, cantidad_herramientas = 0, herramientas = []) {
        this.velocidad = velocidad;
        this.altura = altura;
        this.peso_total = 0;
        this.cantidad_herramientas = cantidad_herramientas;
        this.herramientas = [];
    }
    agregarHerramienta(herramienta) {
        this.herramientas.push(herramienta);
        this.cantidad_herramientas++;
        this.peso_total += herramienta.getPesoHerramienta();
        console.log(`${herramienta.getTipoHerramienta()} agregado`);
    }
    getPesoTotal() {
        return this.peso_total;
    }
    getVelocidadFinal() {
        if (this.peso_total > 200) {
            let pesoExcedido = this.peso_total - 200;
            let vecesExcedidas = pesoExcedido / 50;
            let PorcentajeVelocidadFinalPerdida = vecesExcedidas * 2;
            let velocidadFinalPerdida = this.velocidad - PorcentajeVelocidadFinalPerdida;
            return `Velocidad final: ${velocidadFinalPerdida}. Porcentaje estimado perdido: ${PorcentajeVelocidadFinalPerdida}%`;
        }
        else {
            return `Velocidad total: ${this.velocidad}. El dron no pierde velocidad`;
        }
    }
    getAlturaFinal() {
        if (this.peso_total > 200) {
            let pesoExcedido = this.peso_total - 200;
            let vecesExcedidas = pesoExcedido / 50;
            let porcentajeAlturaFinalPerdida = vecesExcedidas * 5;
            let alturaFinalPerdida = this.altura - porcentajeAlturaFinalPerdida;
            return `Altura final: ${alturaFinalPerdida}. Porcentaje estimado perdido: ${porcentajeAlturaFinalPerdida}%`;
        }
        else {
            return `Altura total: ${this.velocidad}. El dron no pierde altura`;
        }
    }
    getHerramientas() {
        console.log('Herramientas: ');
        for (let i = 0; i < this.herramientas.length; i++) {
            console.log(this.herramientas[i]);
        }
    }
}
exports.Dron = Dron;
class Herramienta {
    tipo_herramienta;
    peso;
    constructor(tipo_herramienta, peso) {
        this.tipo_herramienta = tipo_herramienta;
        this.peso = peso;
    }
    getTipoHerramienta() {
        return this.tipo_herramienta;
    }
    getPesoHerramienta() {
        return this.peso;
    }
}
exports.Herramienta = Herramienta;
//# sourceMappingURL=excercise14.js.map