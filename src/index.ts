import { Persona } from "./personas";
import { Robot, sistemaDeTraccion } from "./excercise13";
import { Dron, Herramienta } from "./excercise14";
import { Barco } from "./excercise15";
import { Vehiculo, Elemento } from "./excercise16";


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


    //EXCERCISE 14):
    const sensorInfrarrojo1 = new Herramienta('Sensor infrarrojo', 250);
    const Taser = new Herramienta('Taser', 300);
    const brazoRobotico = new Herramienta('Brazo robótico', 500);

    // const dron1 = new Dron(100, 100, 0, 0, []);

    // console.log(dron1.getAlturaFinal());
    // console.log(dron1.getVelocidadFinal());

    // console.log("Peso total: " + dron1.getPesoTotal());

    // dron1.agregarHerramienta(sensorInfrarrojo1);
    // dron1.agregarHerramienta(Taser);
    // dron1.agregarHerramienta(brazoRobotico);

    // console.log("Peso total: " + dron1.getPesoTotal());

    // console.log(dron1.getAlturaFinal());
    // console.log(dron1.getVelocidadFinal());

    //EXCERCISE 15):
    class Acorazado extends Barco{
        private solidez: string;
        private blindaje: string;
    
        constructor(flotabilidad: string, solidez: string, establilidad: string, blindaje: string, tipo_navio: string, nombre: string, velocidad: number, capacidad_carga: string){
            super(tipo_navio, nombre, velocidad, capacidad_carga, flotabilidad, establilidad);
            this.solidez = solidez;
            this.blindaje = blindaje;
        }

        public getSolidez(){
            return this.solidez;
        }

        public getBlindaje(){
            return this.blindaje;
        }
    }

    class Destructor extends Barco{
        private potenciaDeFuego: string;
        private maniobrabilidad: string;
        private solidez: string;

        constructor(potencia_fuego: string, maniobrabilidad: string, solidez: string, flotabilidad: string, establilidad: string, tipo_navio: string, nombre: string, velocidad: number, capacidad_carga: string){
            super(tipo_navio, nombre, velocidad, capacidad_carga, flotabilidad, establilidad);
            this.potenciaDeFuego = potencia_fuego;
            this.maniobrabilidad = maniobrabilidad;
            this.solidez = solidez;
        }

        public getPotenciaDeFuego(){
            return this.potenciaDeFuego;
        }

        public getManiobrabilidad(){
            return this.maniobrabilidad;
        }

        public getSolidez(){
            return this.solidez;
        }
    }

    class Lancha extends Barco{
        private motor: string;
        private maniobrabilidad: string;
        private poseeGrua: boolean;

        constructor(motor: string, maniobrabilidad: string, poseeGrua: boolean, tipo_navio: string, nombre: string, velocidad: number, capacidad_carga: string, flotabilidad: string, estabilidad: string){
            super(tipo_navio, nombre, velocidad, capacidad_carga, flotabilidad, estabilidad);
            this.motor = motor;
            this.maniobrabilidad =  maniobrabilidad;
            this.poseeGrua = poseeGrua;
        }

        public getMotor(){
            return this.motor;
        }

        public getManiobrabilidad(){
            return this.maniobrabilidad;
        }

        public getGrua(){
            return this.poseeGrua;
        }
    }
    
    // const acorazado1 =  new Acorazado('Alta', 'Muy alta', 'Media', 'Muy pesado', 'Acorazado', 'El Escudo', 300, '30 pasajeros');
    // const acorazado2 = new Acorazado('Muy alta', 'Muy alta', 'Alta', 'Muy pesado', 'Acorazado', 'Caparazón', 230, '25 pasajeros');

    // const destructor1 = new Destructor('Alta', 'Alta', 'Media/baja', 'Alta', 'Alta', 'Destructor', 'Destructor Uno', 350, '20 pasajeros');
    // const destructor2 = new Destructor('Muy alta', 'Muy alta', 'Baja', 'Media', 'Media', 'Destructor', 'Destructor Dos', 400, '15 pasajeros');

    // const barcoHospital = new Barco('Hospital', 'Sibelancia', 350, '70 pasajeros', 'Muy alta', 'Alta');

    // const laGaucha = new Lancha('Fuera de borda', 'Alta', true, 'Lancha', 'La Gaucha', 200, '8 pasajeros', 'Alta', 'Media/baja');
    // const elGaucho = new Lancha('Fuera de borda', 'Alta', true, 'Lancha', 'El Gaucho', 200, '8 pasajeros', 'Alta', 'Media/baja');

    // console.log('ACORAZADO 1: \n')
    // console.log(acorazado1.getNombre());
    // console.log(acorazado1.getBlindaje());
    // console.log(acorazado1.getCapacidadCarga());
    // console.log(acorazado1.getEstabilidad());
    // console.log(acorazado1.getFlotabilidad());
    // console.log(acorazado1.getSolidez());
    // console.log(acorazado1.getTipoNavio());
    // console.log(acorazado1.getVelocidad());

    //EXCERCISE 16
    class Comoda extends Elemento{
        private superficie: string;
        private cantidadCajones: number;
        
        constructor(superficie: string, cantidadCajones: number, descripcion: string, dimensiones: string, id: number){
            super(id, descripcion, dimensiones);
            this.superficie = superficie;
            this.cantidadCajones = cantidadCajones;
        }

        public getSuperficie(){
            return this.superficie;
        }

        public getCantCajones(){
            return this.cantidadCajones;
        }
    }

    class Heladera extends Elemento{
        private voltaje: number;
        private poseeFreezer: boolean;
        constructor(voltaje: number, poseeFreezer: boolean, descripcion: string, dimensiones: string, id: number){
            super(id, descripcion, dimensiones);
            this.voltaje = voltaje;
            this.poseeFreezer = poseeFreezer;
        }

        public getVoltaje(){
            return this.voltaje;
        }

        public PoseeFreezer(){
            return this.poseeFreezer;
        }
    }

    class Lavarropas extends Elemento{
        private voltaje: number;
        private carga: number;
        private revoluciones: number;

        constructor(voltaje: number, carga: number, revoluciones: number, descripcion: string, dimensiones: string, id: number){
            super(id, descripcion, dimensiones);
            this.voltaje = voltaje;
            this.carga = carga;
            this.revoluciones = revoluciones;
        }

        public getVoltaje(){
            return this.voltaje;
        }

        public getCarga(){
            return this.carga;
        }

        public getRevoluciones(){
            return this.revoluciones;
        }
    }

    class Televisor extends Elemento{
        private voltaje: number;
        private tipo: string;
        private esSmart: boolean;
        
        constructor(voltaje: number, tipo: string, esSmart: boolean, descripcion: string, dimensiones: string, id: number){
            super(id, descripcion, dimensiones);
            this.voltaje = voltaje;
            this.tipo = tipo;
            this.esSmart = esSmart;
        }

        public getVoltaje(){
            return this.voltaje;
        }

        public getTipo(){
            return this.tipo;
        }

        public EsSmart(){
            return this.esSmart;
        }
    }

    class Bicicleta extends Elemento{
        private tamanioRodado: number;
        private esElectrica: boolean;
        private cantidadCambios: number;

        constructor(tamanioRodado: number, esElectrica: boolean, cantidadCambios: number, descripcion: string, dimensiones: string, id: number){
            super(id, descripcion, dimensiones);
            this.tamanioRodado = tamanioRodado;
            this.esElectrica = esElectrica;
            this.cantidadCambios = cantidadCambios;
        }

        public getTamanioRodado(){
            return this.tamanioRodado;
        }

        public getEsElectrica(){
            return this.esElectrica;
        }

        public getCantCambios(){
            return this.cantidadCambios;
        }
    }

    // const auto1 = new Vehiculo('Auto', 0, [], 5);
    // const camioneta1 = new Vehiculo('Camioneta', 0, [], 10);


    // const Comoda1 = new Comoda('de melamina madera', 6, 'Comoda', '2m X 50cm', 1);
    // const Lavarropas1 = new Lavarropas(1400, 9, 1000, 'Lavarropas TURBO MAX 2000', '60X50', 2);
    // const televisor1 = new Televisor(500, 'LCD', false, 'Televisor LCD Philco', '30 pulgadas', 3);
    // const heladera1 = new Heladera(2000, true, 'Heladera PHILCO', '2m x 50cm', 4);
    // const bicicleta1 = new Bicicleta(29, false, 21, 'Bicicleta rodado 29 MaxPower', '60cm x 1.80cm', 5);

    // camioneta1.getCapacidadCarga();
    // camioneta1.cargarElemento(Comoda1);
    // camioneta1.cargarElemento(Lavarropas1);
    // camioneta1.cargarElemento(heladera1);
    // camioneta1.listarElementos();

    // auto1.getCapacidadCarga();
    // auto1.cargarElemento(televisor1);
    // auto1.cargarElemento(bicicleta1);
    // auto1.listarElementos();

    

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