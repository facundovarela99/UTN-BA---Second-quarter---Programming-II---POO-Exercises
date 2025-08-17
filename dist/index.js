"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personas_1 = require("./personas");
const robot_1 = require("./robot");
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
    const sistema_traccion_oruga = new robot_1.sistemaDeTraccion('Oruga');
    const sistema_traccion_rueda_caucho = new robot_1.sistemaDeTraccion('Rueda de caucho');
    const robot1 = new robot_1.Robot('KT-2020-P', 10, sistema_traccion_oruga);
    console.log(`Número de serie del robot 1: ${robot1.NroSerie}. Potencia de tracción final: ${robot1.potenciaTraccionFinal(sistema_traccion_oruga.TipoTraccion)}`);
    robot1.getSistemaTraccion(sistema_traccion_oruga.TipoTraccion);
    const robot2 = new robot_1.Robot('KT-2020-B', 10, sistema_traccion_rueda_caucho);
    console.log(`Número de serie: ${robot2.NroSerie}. Potencia de tracción final: ${robot2.potenciaTraccionFinal(sistema_traccion_rueda_caucho.TipoTraccion)}`);
    robot2.getSistemaTraccion(sistema_traccion_rueda_caucho.TipoTraccion);
}
main();
//# sourceMappingURL=index.js.map