import { Persona } from "./personas";
import { Robot, sistemaDeTraccion } from "./excercise13";
import { Dron, Herramienta } from "./excercise14";


function main(): void {

    class Visitante extends Persona {
        public id_visitante: string;
        private dni: number;
        constructor(nombre: string, apellido: string, fecha_nacimiento: number, id_visitante: string, dni: number) {
            super(nombre, apellido, fecha_nacimiento);
            this.id_visitante = id_visitante;
            this.dni = dni;
        }

        public get DNI() {
            return this.dni;
        }

        public presentarse() {
            console.log(`Hola, soy el visitante ${this.Nombre} ${this.Apellido}. Mi ID es ${this.id_visitante}`);
        }
    }

    class Guardia extends Persona {
        private nro_legajo: number;
        constructor(nombre: string, apellido: string, fecha_nacimiento: number, nro_legajo: number) {
            super(nombre, apellido, fecha_nacimiento);
            this.nro_legajo = nro_legajo;
        }

        public controlarDocumento(nombreCompleto: string, dni: number) {
            console.log(`Adelante ${nombreCompleto} con DNI ${dni}`);
        }

        public presentarse() {
            console.log(`Hola, mi nombre es ${this.Nombre} ${this.Apellido} y soy el guardia. Mi número de legajo es ${this.nro_legajo}`);
        }
    }

    const sensorInfrarrojo1 = new Herramienta('Sensor infrarrojo', 250);
    const Taser = new Herramienta('Taser', 300);
    const brazoRobotico = new Herramienta('Brazo robótico', 500);

    const dron1 = new Dron(100, 100, 0, 0, []);

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




//Excercise 13th code:{
//         const sistema_traccion_oruga = new sistemaDeTraccion('Oruga');
//         const sistema_traccion_rueda_caucho = new sistemaDeTraccion('Rueda de caucho');

//         const robot1 = new Robot('KT-2020-P', 10, sistema_traccion_oruga);
//         console.log(`Número de serie del robot 1: ${robot1.NroSerie}. Potencia de tracción final: ${robot1.potenciaTraccionFinal(sistema_traccion_oruga.TipoTraccion)}`);
//     robot1.getSistemaTraccion(sistema_traccion_oruga.TipoTraccion);

//     const robot2 = new Robot('KT-2020-B', 10, sistema_traccion_rueda_caucho);
//     console.log(`Número de serie: ${robot2.NroSerie}. Potencia de tracción final: ${robot2.potenciaTraccionFinal(sistema_traccion_rueda_caucho.TipoTraccion)}`);
//     robot2.getSistemaTraccion(sistema_traccion_rueda_caucho.TipoTraccion);
// }