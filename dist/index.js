"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personas_1 = require("./personas");
const excercise14_1 = require("./excercise14");
const excercise15_1 = require("./excercise15");
const excercise16_1 = require("./excercise16");
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
    class Acorazado extends excercise15_1.Barco {
        solidez;
        blindaje;
        constructor(flotabilidad, solidez, establilidad, blindaje, tipo_navio, nombre, velocidad, capacidad_carga) {
            super(tipo_navio, nombre, velocidad, capacidad_carga, flotabilidad, establilidad);
            this.solidez = solidez;
            this.blindaje = blindaje;
        }
        getSolidez() {
            return this.solidez;
        }
        getBlindaje() {
            return this.blindaje;
        }
    }
    class Destructor extends excercise15_1.Barco {
        potenciaDeFuego;
        maniobrabilidad;
        solidez;
        constructor(potencia_fuego, maniobrabilidad, solidez, flotabilidad, establilidad, tipo_navio, nombre, velocidad, capacidad_carga) {
            super(tipo_navio, nombre, velocidad, capacidad_carga, flotabilidad, establilidad);
            this.potenciaDeFuego = potencia_fuego;
            this.maniobrabilidad = maniobrabilidad;
            this.solidez = solidez;
        }
        getPotenciaDeFuego() {
            return this.potenciaDeFuego;
        }
        getManiobrabilidad() {
            return this.maniobrabilidad;
        }
        getSolidez() {
            return this.solidez;
        }
    }
    class Lancha extends excercise15_1.Barco {
        motor;
        maniobrabilidad;
        poseeGrua;
        constructor(motor, maniobrabilidad, poseeGrua, tipo_navio, nombre, velocidad, capacidad_carga, flotabilidad, estabilidad) {
            super(tipo_navio, nombre, velocidad, capacidad_carga, flotabilidad, estabilidad);
            this.motor = motor;
            this.maniobrabilidad = maniobrabilidad;
            this.poseeGrua = poseeGrua;
        }
        getMotor() {
            return this.motor;
        }
        getManiobrabilidad() {
            return this.maniobrabilidad;
        }
        getGrua() {
            return this.poseeGrua;
        }
    }
    const acorazado1 = new Acorazado('Alta', 'Muy alta', 'Media', 'Muy pesado', 'Acorazado', 'El Escudo', 300, '30 pasajeros');
    const acorazado2 = new Acorazado('Muy alta', 'Muy alta', 'Alta', 'Muy pesado', 'Acorazado', 'Caparazón', 230, '25 pasajeros');
    const destructor1 = new Destructor('Alta', 'Alta', 'Media/baja', 'Alta', 'Alta', 'Destructor', 'Destructor Uno', 350, '20 pasajeros');
    const destructor2 = new Destructor('Muy alta', 'Muy alta', 'Baja', 'Media', 'Media', 'Destructor', 'Destructor Dos', 400, '15 pasajeros');
    const barcoHospital = new excercise15_1.Barco('Hospital', 'Sibelancia', 350, '70 pasajeros', 'Muy alta', 'Alta');
    const laGaucha = new Lancha('Fuera de borda', 'Alta', true, 'Lancha', 'La Gaucha', 200, '8 pasajeros', 'Alta', 'Media/baja');
    const elGaucho = new Lancha('Fuera de borda', 'Alta', true, 'Lancha', 'El Gaucho', 200, '8 pasajeros', 'Alta', 'Media/baja');
    class Comoda extends excercise16_1.Elemento {
        superficie;
        cantidadCajones;
        constructor(superficie, cantidadCajones, descripcion, dimensiones, id) {
            super(id, descripcion, dimensiones);
            this.superficie = superficie;
            this.cantidadCajones = cantidadCajones;
        }
        getSuperficie() {
            return this.superficie;
        }
        getCantCajones() {
            return this.cantidadCajones;
        }
    }
    class Heladera extends excercise16_1.Elemento {
        voltaje;
        poseeFreezer;
        constructor(voltaje, poseeFreezer, descripcion, dimensiones, id) {
            super(id, descripcion, dimensiones);
            this.voltaje = voltaje;
            this.poseeFreezer = poseeFreezer;
        }
        getVoltaje() {
            return this.voltaje;
        }
        PoseeFreezer() {
            return this.poseeFreezer;
        }
    }
    class Lavarropas extends excercise16_1.Elemento {
        voltaje;
        carga;
        revoluciones;
        constructor(voltaje, carga, revoluciones, descripcion, dimensiones, id) {
            super(id, descripcion, dimensiones);
            this.voltaje = voltaje;
            this.carga = carga;
            this.revoluciones = revoluciones;
        }
        getVoltaje() {
            return this.voltaje;
        }
        getCarga() {
            return this.carga;
        }
        getRevoluciones() {
            return this.revoluciones;
        }
    }
    class Televisor extends excercise16_1.Elemento {
        voltaje;
        tipo;
        esSmart;
        constructor(voltaje, tipo, esSmart, descripcion, dimensiones, id) {
            super(id, descripcion, dimensiones);
            this.voltaje = voltaje;
            this.tipo = tipo;
            this.esSmart = esSmart;
        }
        getVoltaje() {
            return this.voltaje;
        }
        getTipo() {
            return this.tipo;
        }
        EsSmart() {
            return this.esSmart;
        }
    }
    class Bicicleta extends excercise16_1.Elemento {
        tamanioRodado;
        esElectrica;
        cantidadCambios;
        constructor(tamanioRodado, esElectrica, cantidadCambios, descripcion, dimensiones, id) {
            super(id, descripcion, dimensiones);
            this.tamanioRodado = tamanioRodado;
            this.esElectrica = esElectrica;
            this.cantidadCambios = cantidadCambios;
        }
        getTamanioRodado() {
            return this.tamanioRodado;
        }
        getEsElectrica() {
            return this.esElectrica;
        }
        getCantCambios() {
            return this.cantidadCambios;
        }
    }
    const auto1 = new excercise16_1.Vehiculo('Auto', 0, [], 5);
    const camioneta1 = new excercise16_1.Vehiculo('Camioneta', 0, [], 10);
    const Comoda1 = new Comoda('de melamina madera', 6, 'Comoda', '2m X 50cm', 1);
    const Lavarropas1 = new Lavarropas(1400, 9, 1000, 'Lavarropas TURBO MAX 2000', '60X50', 2);
    const televisor1 = new Televisor(500, 'LCD', false, 'Televisor LCD Philco', '30 pulgadas', 3);
    const heladera1 = new Heladera(2000, true, 'Heladera PHILCO', '2m x 50cm', 4);
    const bicicleta1 = new Bicicleta(29, false, 21, 'Bicicleta rodado 29 MaxPower', '60cm x 1.80cm', 5);
    camioneta1.getCapacidadCarga();
    camioneta1.cargarElemento(Comoda1);
    camioneta1.cargarElemento(Lavarropas1);
    camioneta1.cargarElemento(heladera1);
    camioneta1.listarElementos();
    auto1.getCapacidadCarga();
    auto1.cargarElemento(televisor1);
    auto1.cargarElemento(bicicleta1);
    auto1.listarElementos();
}
main();
//# sourceMappingURL=index.js.map