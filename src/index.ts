// import { Person } from "./excercise1";
import { Vehicle } from "./excercise2";
// import { Article } from "./excercise3";
import { Cinema } from "./excercise4";
import { Fruit } from "./excercise6";
import { Ninja } from "./excercise7";
import { Person, Guard, Visitor } from "./excercise8-12";
// import { Robot, TractionSystem } from "./excercise13";
import { Dron } from "./guide14/dron";
import { Tool } from "./guide14/tool";
// import { Dron, Tool } from "./guide14/tool";
import { EquipoLancha, Acorazado, Destructor, BarcoHospital, Lancha } from "./excercise15";
// import { Vehiculo, Elemento } from "./excercise16";
import { Scanner, Objeto } from "./excercise17";
import { Casa, Departamento, Contacto, Sistema, Formulario } from "./excercise18";
import { RegisterSystem ,Article, PriceList } from "./excercise19-20";
// import Client from "./excercise21";
import { Cuadrado, FiguraGeometrica } from "./herencia";
// import {Cadete, Operador, Administrativo, Gerente, BonoPresentismoA, BonoPresentismoB, BonoResultado}  from "./herencia2";
import { Robot, Oruga, RuedaDeCaucho } from "./excercise13";

function main(): void {

    /*Excercise 1:*/
    // const person1 = new Person('Facundo', 'Varela');
    // console.log(`Name: ${person1.name}`);
    // console.log(`Last name: ${person1.lastName}`);

    /*Excercise 2:*/
    // console.log('Vehicles:\n')
    // const vehicle1 = new Vehicle('Ford', 'Mustang', '125asd');
    // const vehicle2 = new Vehicle('Chevrolet', 'Prisma', 12345);
    // console.log(`Vehicle 1:\nBrand: ${vehicle1.brand}\nModel: ${vehicle1.model}\nPatent number: ${vehicle1.patentNumber}\n`)
    // console.log(`Vehicle 2:\nBrand: ${vehicle2.brand}\nModel: ${vehicle2.model}\nPatent number: ${vehicle2.patentNumber}\n`)

    /*Excercise 3:*/
    // console.log('Articles:\n')
    // const article1 = new Article('Powershell', 'Model 1');
    // const article2 = new Article('Command Prompt', 'Model 2');

    // console.log(`Article 1: ${article1.brand} ${article1.model}`);
    // console.log(`Article 2: ${article2.brand} ${article2.model}`);

    /*Excercise 4/5:*/
    // const cinema1 = new Cinema('Friday the 13th', '23:00hs p.m');
    // const cinema2 = new Cinema('Spider-man', '17:00hs p.m');
    // console.log(`Movie: ${cinema1.movie} - Schedule: ${cinema1.schedule}`)
    // cinema1.movie = 'Jason vs Freddy Krueger';
    // cinema1.schedule = '13:00hs a.m';
    // console.log(`New movie: ${cinema1.movie} - Schedule: ${cinema1.schedule}`)

    /*Excercise 6:*/
    // const apple = new Fruit('Red', 150, true);
    // const apple2 = new Fruit('Green', 175);
    // const orange = new Fruit('Orange');

    // orange.weight = 250;
    // console.log(`Orange weight: ${orange.weight}. its eadible: ${orange.itsEadible()}`);
    
    /* Excercise 7: */
    // const Scorpion = new Ninja('Ninjitsu', 'Katana', 100);
    // const SubZero = new Ninja('Shotokan', 'Freeze arms', 100);
    // console.log(Scorpion.hop(5));
    // console.log(Scorpion.attack());

    /* Excercise 8-12: */
    // const guard1 = new Guard('Facundo', 'Varela');
    // const visitor1 = new Visitor('Gonzalo', 'Varela', 123456789);
    // const visitor2 = new Visitor('Federico', 'Varela', 34562189);

    // console.log(guard1.introduceHimself()+"\n"); //Guard introduceHimself() function overwrite Person introduceHimself() function
    // console.log(visitor1.introduceHimself()+"\n"); 
    // console.log(guard1.checkDNI(visitor1.introduceHimself(), visitor1.dniNumber));

    /* EXCERCISE 13): */
    // const rubberWheelTractionSystem1 = new TractionSystem('Rubber Wheel', false, 10);
    // const CatterpillarTractionSystem1 = new TractionSystem('Catterpillar', true, 10);
    // const robot1 = new Robot('KT-2020-P', 10, rubberWheelTractionSystem1);
    // const robot2 = new Robot('KT-2020-Q', 10, CatterpillarTractionSystem1);

    // console.log('Robot 1:\n');
    // console.log(`Serial number: ${robot1.serialNumber+"\n"}`);
    // console.log(`Traction system: ${robot1.typeTraction.name}`);
    // console.log(`Base power traction: ${robot1.basePowerTraction}. ${robot1.advance(robot1.typeTraction.HpUse(robot1.typeTraction.name))}`)

    // console.log('Robot 2:\n');
    // console.log(robot2.serialNumber+"\n");
    // console.log(robot2.typeTraction.name);
    // console.log(`Base power traction: ${robot2.basePowerTraction}. ${robot2.advance(robot1.typeTraction.HpUse(robot2.typeTraction.name))}`)
    
    /* EXCERCISE 14): */
    // const infraredSensor1 = new Tool('Infrared sensor', 250, 'Detect high temperatures');
    // const Taser1 = new Tool('Taser', 300, 'Electrocute hostiles');
    // const roboticArm1 = new Tool('Robotic Arm', 500, 'Grab heavy gear');

    // const dron1 = new Dron(100, 100, 0, 0, []);

    // console.log(dron1.getFinalHeight());
    // console.log(dron1.getFinalVelocity());

    // console.log("Total weight: " + dron1.getTotalWeight());

    // dron1.addTool(infraredSensor1);
    // dron1.addTool(Taser1);
    // dron1.addTool(roboticArm1);

    // console.log("Total weight: " + dron1.getTotalWeight());

    // console.log(dron1.getFinalHeight());
    // console.log(dron1.getFinalVelocity());
    // console.log(dron1.getToolAction(Taser1));

    /* EXCERCISE 15): */    
    // const acorazado1 = new Acorazado('Acorazado Uno', 100, 80, 150, 40, 100, 200, 60);
    // const destructor1 = new Destructor('Destructor Uno', 80, 60, 180, 40, 50, 250);
    // const barcoHospital1 = new BarcoHospital('Sibelancia', 90, 90, 180, 30);
    // const equipoLancha1 = new EquipoLancha('Motor fuera de borda');
    // const equipoLancha2 = new EquipoLancha('Grúa');
    // const lancha1 = new Lancha('La Gaucha', 50, 30, 170, 30, [equipoLancha1, equipoLancha2]);
    // const lancha2 = new Lancha('El Gaucho',  50, 30, 170, 30, [equipoLancha1, equipoLancha2]);

    // console.log(barcoHospital1.capacidadDeCarga);

    // lancha1.getEquipamiento();

    // console.log(`Potencia de fuego del ${acorazado1.nombre}:  ${acorazado1.getPotenciaDeFuego()}`);
    // console.log(`Potencia de fuego del ${destructor1.nombre}:  ${destructor1.getPotenciaDeFuego()}`);

    /* EXCERCISE 16): */
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

    /* EXCERCISE 17): */
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

    // class Departamento extends Inmueble{
    //     private piso: number;
    //     private letraDpto: string;
    //     private admiteMascotas: boolean;

    //     constructor(piso: number = 0, letraDpto: string = "", admiteMascotas: boolean = false, provincia: string = "", ciudad: string = "", barrio: string ="", nombreCalle: string = "", altura: number = 0, codigoPostal: number = 0, perteneceBarrioPrivado: boolean =false, conexionSuministroGas:boolean = false, emplazamientoInfraCloacal: boolean = false, camposCompletos: boolean = false, observaciones: string = ""){
    //         super(provincia, ciudad, barrio, nombreCalle, altura, codigoPostal, perteneceBarrioPrivado, conexionSuministroGas, emplazamientoInfraCloacal, camposCompletos, observaciones);
    //         this.piso = piso;
    //         this.letraDpto = letraDpto;
    //         this.admiteMascotas = admiteMascotas;
    //     }
    // }

    // class Casa extends Inmueble{
    //     private poseeQuincho: boolean;
    //     private poseePileta: boolean;

    //     constructor(poseeQuincho: boolean = false, poseePileta: boolean = false, provincia: string = "", ciudad: string = "", barrio: string ="", nombreCalle: string = "", altura: number = 0, codigoPostal: number = 0, perteneceBarrioPrivado: boolean =false, conexionSuministroGas:boolean = false, emplazamientoInfraCloacal: boolean = false, camposCompletos: boolean = false, observaciones: string = ""){
    //         super(provincia, ciudad, barrio, nombreCalle, altura, codigoPostal, perteneceBarrioPrivado, conexionSuministroGas, emplazamientoInfraCloacal, camposCompletos, observaciones);
    //         this.poseeQuincho = poseeQuincho;
    //         this.poseePileta = poseePileta;
    //     }
    // }
    
    // const listaFormulario = new ListaFormularios([]);
    
    // const departamento1 = new Departamento(2, 'B', false, 'Buenos Aires', 'Caba', 'Recoleta', 'Laprida', 1234, 7500, false, true, true, true);
    // const contacto1 = new Contacto('Facundo', 'Varela', 12345678, 'facundo@example.com', true, "");

    // const departamento2 = new Departamento(1, 'A', true, 'Misiones', 'Ciudad 1', 'Las Flores', 'Floresta', 456, 8752, true, true, true, false);
    // const contacto2 = new Contacto('Fernando', '', 0, '', false, '');

    // const formulario1 = new Formulario(1, departamento1, contacto1, true, false);
    // const formulario2 = new Formulario(2, undefined, undefined, false, false);

    // formulario2.ingresarDatosContacto(contacto2);
    // formulario2.listoParaDarAlta();

    // formulario1.listoParaDarAlta();
    // listaFormulario.darDeAlta(formulario1);
    // listaFormulario.getFormulariosDeAlta();
    // listaFormulario.darDeAlta(formulario2);
    // listaFormulario.getFormulariosDeAlta();
    
    /* EXCERCISE 18): */
    //

    // const sistema1 = new Sistema();
    // sistema1.getFormulariosDeAlta();

    // const depto1 = new Departamento();
    // console.log(depto1.camposCompletos);


    /* EXCERCISE 19): */
    // const RegisterSystemV1 = new RegisterSystem();
    // const dresser1 = new Article();
    // const closet1 = new Article();
    // const nightStand1 = new Article();
    // const table1 = new Article();

    // const WholeSaleList1 = new PriceList();

    // RegisterSystemV1.registerNewArticle(dresser1, 'Dresser', 1000, 1500, 1000, 'Browasdasdsaddddddddddddddddddddddddddddddddddddn');
    // RegisterSystemV1.registerNewArticle(closet1, 'Closet', 1200, 1500, 900, 'Brown and White');
    // RegisterSystemV1.registerNewArticle(nightStand1, 'Night Stand', 500, 850, 100, 'Brown and black');
    // RegisterSystemV1.registerNewArticle(table1, 'Table', 300, 600, 200, 'Brown, Black and white');
    // RegisterSystemV1.registerNewList(WholeSaleList1, 'Whole Sale List 1', '2025-12-31', false);

    // RegisterSystemV1.addArticleCreatedToList(WholeSaleList1, dresser1);
    // RegisterSystemV1.addArticleCreatedToList(WholeSaleList1, closet1);
    // RegisterSystemV1.addArticleCreatedToList(WholeSaleList1, nightStand1);
    // RegisterSystemV1.addArticleCreatedToList(WholeSaleList1, table1);
    // RegisterSystemV1.showArticlesInList(WholeSaleList1);
    // RegisterSystemV1.showArticlesNumber(WholeSaleList1);
    // const pepeElCuadrado = new Cuadrado('Pepe', 'Rojo', 5);
    // console.log(pepeElCuadrado.getPerimetro());

    // let figura: FiguraGeometrica = pepeElCuadrado

    /* HERENCIA 2*/
    // const bonoPresentA = new BonoPresentismoA();
    // const bonoPresentB = new BonoPresentismoB();
    // const bonoResultado = new BonoResultado();
    // const cadete1 = new Cadete('Facundo Varela', 1000, 10, 85);
    // const Operador1 = new Operador('Pedro Gonzalez', 10500, 5, 99);
    // cadete1.calcularSueldo(cadete1.sueldoNeto, bonoPresentA.asignarBono(cadete1.ausencias), bonoPresentB.asignarBono(), bonoResultado.asignarBono(cadete1.nivelObjetivo, cadete1.sueldoNeto));
    // Operador1.calcularSueldo(Operador1.sueldoNeto, bonoPresentA.asignarBono(Operador1.ausencias), bonoPresentB.asignarBono(), bonoResultado.asignarBono(Operador1.nivelObjetivo, Operador1.sueldoNeto));

    const oruga1 = new Oruga();
    const ruedaCaucho1 = new RuedaDeCaucho();
    const robot1 = new Robot();
    console.log(robot1.poseeSistemaTraccion);
    // robot1.setTraccion(oruga1);
    robot1.setTraccion(ruedaCaucho1);
    robot1.mostrarDatos();

}

main();