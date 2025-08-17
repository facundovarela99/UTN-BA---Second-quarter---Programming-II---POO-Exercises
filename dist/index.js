"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personas_1 = require("./personas");
const excercise14_1 = require("./excercise14");
function main() {
    class Visitante extends personas_1.Persona {
        id_visitante;
        dni;
        constructor(nombre, apellido, fecha_nacimiento, id_visitante, dni) {
            super(nombre, apellido, fecha_nacimiento);
            this.id_visitante = id_visitante;
            this.dni = dni;
        }
        get DNI() {
            return this.dni;
        }
        presentarse() {
            console.log(`Hola, soy el visitante ${this.Nombre} ${this.Apellido}. Mi ID es ${this.id_visitante}`);
        }
    }
    class Guardia extends personas_1.Persona {
        nro_legajo;
        constructor(nombre, apellido, fecha_nacimiento, nro_legajo) {
            super(nombre, apellido, fecha_nacimiento);
            this.nro_legajo = nro_legajo;
        }
        controlarDocumento(nombreCompleto, dni) {
            console.log(`Adelante ${nombreCompleto} con DNI ${dni}`);
        }
        presentarse() {
            console.log(`Hola, mi nombre es ${this.Nombre} ${this.Apellido} y soy el guardia. Mi número de legajo es ${this.nro_legajo}`);
        }
    }
    const sensorInfrarrojo1 = new excercise14_1.Herramienta('Sensor infrarrojo', 250);
    const Taser = new excercise14_1.Herramienta('Taser', 300);
    const brazoRobotico = new excercise14_1.Herramienta('Brazo robótico', 500);
    const dron1 = new excercise14_1.Dron(100, 100, 0, 0, []);
    console.log(dron1.getAlturaFinal());
    console.log(dron1.getVelocidadFinal());
    console.log("Peso total: " + dron1.getPesoTotal());
    dron1.agregarHerramienta(sensorInfrarrojo1);
    dron1.agregarHerramienta(Taser);
    dron1.agregarHerramienta(brazoRobotico);
    console.log("Peso total: " + dron1.getPesoTotal());
    console.log(dron1.getAlturaFinal());
    console.log(dron1.getVelocidadFinal());
}
main();
//# sourceMappingURL=index.js.map