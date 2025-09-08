// 13. El laboratorio Kokumo Technologies está desarrollando el prototipo de un robot explorador cuyo 
// sistema de tracción puede ser personalizado para que se adapte mejor al terreno. 
// El robot, llamado KT-2020, tiene las siguientes características: 

// ● Número de serie: KT-2020-P 
// ● Potencia de tracción base (PTB): 10 hp 
// ● Tracción: cualquiera de las dos opciones desarrolladas. 
// Los sistemas de tracción disponibles son: 
// ● Rueda de caucho: ideal para entornos urbanos, su uso le resta 1 hp al PTB y permite el 
// rodado de hasta 100 km; cuando se gasta, debe reemplazarse. 
// ● Oruga: para todo tipo de terreno, le permite avanzar hasta 400 km antes de requerir 
// reemplazo y resta 3 hp al PTB. Incorpora sensores Meke-M0 que le permiten conocer la 
// temperatura. 

// Analizar, diseñar, diagramar las relaciones e implementar el código. 
// Crear instancias de cada una de las clases y asignarle al robot los distintos sistemas de tracción, 
// procurando mostrar por pantalla los siguientes datos entre las distintas asignaciones: 
// Número de serie, potencia de tracción final, tipo de tracción, cuanto puede avanzar y 
// datos sobre cualquier característica adicional que posea.

// implements Imostrable

export class Robot {
    private _numeroSerie: string;
    private _potenciaTraccionBase: number;
    private _traccion?: SistemaTraccion | undefined;
    private _poseeSistemaTraccion: boolean = false;

    constructor(numeroSerie: string = "KT-2020-P", potenciaTraccionBase: number = 10, traccion?: SistemaTraccion, poseeSistemaTraccion: boolean = false) {
        this._numeroSerie = numeroSerie;
        this._potenciaTraccionBase = potenciaTraccionBase;
        this._traccion = traccion;
        this._poseeSistemaTraccion = poseeSistemaTraccion
    }

    public get numeroSerie(): string { return this._numeroSerie };
    public get potenciaTraccionBase(): number { return this._potenciaTraccionBase };
    public get poseeSistemaTraccion(): boolean{return this._poseeSistemaTraccion};
    public setTraccion(sistemaDeTraccion: SistemaTraccion) { 
        this._traccion = sistemaDeTraccion;
        this._poseeSistemaTraccion = true };

    public mostrarDatos() {
        console.log("Datos del robot KT-2020:\n");
        console.log(`N° de serie: ${this._numeroSerie}.\nPotencia Traccion base: ${this.potenciaTraccionBase}.`)
        if (this.poseeSistemaTraccion) {
            console.log(`\nSistema de tracción: ${this._traccion?.nombre}. Datos del sistema de tracción: ${this._traccion?.mostrarDatos(this._potenciaTraccionBase)}`)
        } else{
            console.log('El robot no cuenta actualmente con un sistema de traccion.');
        }
    }
}

abstract class SistemaTraccion {
    private _nombre: string;
    private _rodado: number;
    private _sensores: boolean;
    constructor(nombre: string, rodado: number, sensores: boolean) {
        this._nombre = nombre;
        this._rodado = rodado;
        this._sensores = sensores;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public get rodado(): number {
        return this._rodado;
    }

    public poseeSensores(): boolean {
        return this._sensores;
    }

    public abstract calculoPotenciaTraccionFinal(potenciaTraccionBaseRobot: number): number;
    public abstract mostrarDatos(ptb: number): string;
}


export class RuedaDeCaucho extends SistemaTraccion {
    constructor(nombre: string = 'Rueda de caucho', rodado: number = 100, sensores: boolean = false) {
        super(nombre, rodado, sensores);
    }

    public calculoPotenciaTraccionFinal(potenciaTraccionBaseRobot: number): number {
        return potenciaTraccionBaseRobot - 1;
    }

    public mostrarDatos(ptb: number): string {
        return  `
    Rodado: ${this.rodado}\n
    Posee sensores Meke-40: ${this.poseeSensores()}\n
    Potencia tracción final: ${this.calculoPotenciaTraccionFinal(ptb)}\n
    Info adicional: Puede avanzar hasta 100km hasta su reemplazo.
        `;
    }
}

export class Oruga extends SistemaTraccion {
    constructor(nombre: string = "Oruga", rodado: number = 400, sensores: boolean = true) {
        super(nombre, rodado, sensores);
    }

    public calculoPotenciaTraccionFinal(potenciaTraccionBaseRobot: number): number {
        return potenciaTraccionBaseRobot - 3;
    }

    public mostrarDatos(ptb: number): string {
        return  `
    Rodado: ${this.rodado}\n
    Posee sensores Meke-40: ${this.poseeSensores()}\n
    Potencia tracción final: ${this.calculoPotenciaTraccionFinal(ptb)}\n
    Info adicional: Puede avanzar hasta 400km hasta su reemplazo.
        `;
    }
}


//13. The Kokumo Laboratory Technologis is developing the explorer robot prototype whose traction system  can be personalized so that it adapts better to the terrain.
// The robot called KT-2020 has the following characteristics:
// ● Serial number: KT-2020-P
// ● Base traction power (BTP): 10 HP
// ● Traction type: anyone of the two options developed.
// The traction systems are:
// ● Rubber wheel: ideal for urban environments. it's use takes away 1 hp to the BTP and allows to ride until 100km; when it runs out, it must be replaced
// ● Catterpillar: all kind of terrain, it allows the robot to advance until 400km beforer require to be replaced and it's use takes away 3 hp to the BTP. It's has temperature sensors Meke-M0
// Analyze, design and diagram the relations and implement the code.
// Create instances of each class and assign the robot differents tractions systems,
//trying to show the following data among the differents asignations:
// Serial number, final traction power, traction type-of, how much can the robot advance and the data about any additional feature that it has.


// export class Robot{
//     private _serialNumber: string;
//     private _basePowerTraction: number;
//     private _finalPowerTraction?: number;
//     private _tractionSystem: TractionSystem;

//     constructor(serialNumber: string, powerTraction: number, traction: TractionSystem){
//         this._serialNumber = serialNumber;
//         this._basePowerTraction = powerTraction;
//         this._tractionSystem = traction;
//     }

//     public get serialNumber(): string{
//         return this._serialNumber
//     }

//     public get basePowerTraction(): number{
//         return this._basePowerTraction;
//     }

//     public get typeTraction(): TractionSystem{
//         return this._tractionSystem;
//     }

//     public advance(hpUsed: number){
//         if (this._tractionSystem.name === 'Rubber Wheel') {
//             console.log('It can advance until 100km before beign replaced');
//             this._finalPowerTraction = this._basePowerTraction-hpUsed;
//             return `Final traction power: ${this._finalPowerTraction}`;
//         } else if (this._tractionSystem.name === 'Catterpillar'){
//             console.log('It can advance until 400km before beign replaced');
//             this._finalPowerTraction = this._basePowerTraction-hpUsed;
//             return `Final traction power: ${this._finalPowerTraction}`;
//         }
//     }
// }

// export class TractionSystem{
//     private _name: string;
//     private _sensors?: boolean;

//     constructor(name: string, sensors: boolean = false, hp: number){
//         this._name = name;
//         this._sensors = sensors;
//     }

//     public get name(): string{
//         return this._name;
//     }

//     public get sensors(){
//         if (this._sensors){
//             return this._sensors
//         }
//         return undefined;
//     }

//     public HpUse(name: string){
//         if (name.toLowerCase() === 'Rubber Wheel'.toLowerCase()) {
//             return 1;
//         } else if (name.toLowerCase() === 'Catterpillar'.toLowerCase()){
//             return 3;
//         }
//         return 0;
//     }
// }









