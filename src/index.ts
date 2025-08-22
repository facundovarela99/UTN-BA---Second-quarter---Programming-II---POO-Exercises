import { Persona } from "./personas";
import { Robot, sistemaDeTraccion } from "./excercise13";
import { Dron, Herramienta } from "./excercise14";
import { Barco } from "./excercise15";
import { Vehiculo, Elemento } from "./excercise16";
import { Scanner, Objeto } from "./excercise17";
import { ListaFormularios, Formulario, Inmueble, Contacto } from "./excercise18";


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
    // const sensorInfrarrojo1 = new Herramienta('Sensor infrarrojo', 250);
    // const Taser = new Herramienta('Taser', 300);
    // const brazoRobotico = new Herramienta('Brazo robótico', 500);

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
    // class Comoda extends Elemento{
    //     private superficie: string;
    //     private cantidadCajones: number;
        
    //     constructor(superficie: string, cantidadCajones: number, descripcion: string, dimensiones: string, id: number){
    //         super(id, descripcion, dimensiones);
    //         this.superficie = superficie;
    //         this.cantidadCajones = cantidadCajones;
    //     }

    //     public getSuperficie(){
    //         return this.superficie;
    //     }

    //     public getCantCajones(){
    //         return this.cantidadCajones;
    //     }
    // }

    // class Heladera extends Elemento{
    //     private voltaje: number;
    //     private poseeFreezer: boolean;
    //     constructor(voltaje: number, poseeFreezer: boolean, descripcion: string, dimensiones: string, id: number){
    //         super(id, descripcion, dimensiones);
    //         this.voltaje = voltaje;
    //         this.poseeFreezer = poseeFreezer;
    //     }

    //     public getVoltaje(){
    //         return this.voltaje;
    //     }

    //     public PoseeFreezer(){
    //         return this.poseeFreezer;
    //     }
    // }

    // class Lavarropas extends Elemento{
    //     private voltaje: number;
    //     private carga: number;
    //     private revoluciones: number;

    //     constructor(voltaje: number, carga: number, revoluciones: number, descripcion: string, dimensiones: string, id: number){
    //         super(id, descripcion, dimensiones);
    //         this.voltaje = voltaje;
    //         this.carga = carga;
    //         this.revoluciones = revoluciones;
    //     }

    //     public getVoltaje(){
    //         return this.voltaje;
    //     }

    //     public getCarga(){
    //         return this.carga;
    //     }

    //     public getRevoluciones(){
    //         return this.revoluciones;
    //     }
    // }

    // class Televisor extends Elemento{
    //     private voltaje: number;
    //     private tipo: string;
    //     private esSmart: boolean;
        
    //     constructor(voltaje: number, tipo: string, esSmart: boolean, descripcion: string, dimensiones: string, id: number){
    //         super(id, descripcion, dimensiones);
    //         this.voltaje = voltaje;
    //         this.tipo = tipo;
    //         this.esSmart = esSmart;
    //     }

    //     public getVoltaje(){
    //         return this.voltaje;
    //     }

    //     public getTipo(){
    //         return this.tipo;
    //     }

    //     public EsSmart(){
    //         return this.esSmart;
    //     }
    // }

    // class Bicicleta extends Elemento{
    //     private tamanioRodado: number;
    //     private esElectrica: boolean;
    //     private cantidadCambios: number;

    //     constructor(tamanioRodado: number, esElectrica: boolean, cantidadCambios: number, descripcion: string, dimensiones: string, id: number){
    //         super(id, descripcion, dimensiones);
    //         this.tamanioRodado = tamanioRodado;
    //         this.esElectrica = esElectrica;
    //         this.cantidadCambios = cantidadCambios;
    //     }

    //     public getTamanioRodado(){
    //         return this.tamanioRodado;
    //     }

    //     public getEsElectrica(){
    //         return this.esElectrica;
    //     }

    //     public getCantCambios(){
    //         return this.cantidadCambios;
    //     }
    // }

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

    //EXCERCISE 17
    // Hacer pruebas con una Mamushka de madera de varios niveles, un portafolios vacío de cuero,
    // un botiquín de plástico que contiene gasa y agua oxigenada, una bolsa de cuero que contenga un
    // peine y un botiquín.

    // const scanner1 = new Scanner();
    // const portafolios1 = new Objeto('Contenido', 'Portafolio', 'Cuero', 5, []);
    // const peine1 = new Objeto('Contenido', 'Peine', 'Plastico', 0.30, []);
    // const gasa1 = new Objeto('Contenido', 'Gasa', 'Tela', 2, []);
    // const aguaOxigenada1 = new Objeto('Simple', 'Botella de agua oxigenada', 'Plastico', 3, []);
    // const botiquin1 = new Objeto('Sambuchito', 'Botiquin de primeros auxilios', 'Plastico', 8, [gasa1, aguaOxigenada1]);
    // const bolsa1 = new Objeto('Contenedor', 'Bolsa', 'Cuero', 12, [peine1, botiquin1]);

    // scanner1.escaneo(portafolios1);
    // scanner1.escaneo(bolsa1);

    class Departamento extends Inmueble{
        private piso: number;
        private letraDpto: string;
        private admiteMascotas: boolean;

        constructor(piso: number = 0, letraDpto: string = "", admiteMascotas: boolean = false, provincia: string = "", ciudad: string = "", barrio: string ="", nombreCalle: string = "", altura: number = 0, codigoPostal: number = 0, perteneceBarrioPrivado: boolean =false, conexionSuministroGas:boolean = false, emplazamientoInfraCloacal: boolean = false, camposCompletos: boolean = false, observaciones: string = ""){
            super(provincia, ciudad, barrio, nombreCalle, altura, codigoPostal, perteneceBarrioPrivado, conexionSuministroGas, emplazamientoInfraCloacal, camposCompletos, observaciones);
            this.piso = piso;
            this.letraDpto = letraDpto;
            this.admiteMascotas = admiteMascotas;
        }
    }

    class Casa extends Inmueble{
        private poseeQuincho: boolean;
        private poseePileta: boolean;

        constructor(poseeQuincho: boolean = false, poseePileta: boolean = false, provincia: string = "", ciudad: string = "", barrio: string ="", nombreCalle: string = "", altura: number = 0, codigoPostal: number = 0, perteneceBarrioPrivado: boolean =false, conexionSuministroGas:boolean = false, emplazamientoInfraCloacal: boolean = false, camposCompletos: boolean = false, observaciones: string = ""){
            super(provincia, ciudad, barrio, nombreCalle, altura, codigoPostal, perteneceBarrioPrivado, conexionSuministroGas, emplazamientoInfraCloacal, camposCompletos, observaciones);
            this.poseeQuincho = poseeQuincho;
            this.poseePileta = poseePileta;
        }
    }
    
    const listaFormulario = new ListaFormularios([]);
    
    const departamento1 = new Departamento(2, 'B', false, 'Buenos Aires', 'Caba', 'Recoleta', 'Laprida', 1234, 7500, false, true, true, true);
    const contacto1 = new Contacto('Facundo', 'Varela', 12345678, 'facundo@example.com', true, "");

    const departamento2 = new Departamento(1, 'A', true, 'Misiones', 'Ciudad 1', 'Las Flores', 'Floresta', 456, 8752, true, true, true, false);
    const contacto2 = new Contacto('Fernando', '', 0, '', false, '');

    const formulario1 = new Formulario(1, departamento1, contacto1, true, false);
    const formulario2 = new Formulario(2, undefined, undefined, false, false);

    // formulario2.ingresarDatosContacto(contacto2);
    // formulario2.listoParaDarAlta();

    formulario1.listoParaDarAlta();
    listaFormulario.darDeAlta(formulario1);
    listaFormulario.getFormulariosDeAlta();
    // listaFormulario.darDeAlta(formulario2);
    // listaFormulario.getFormulariosDeAlta();
    

}

main();
