import { Empleado } from "./empleado";
import { Micro } from "./micro";

export class Empresa{
    private _razonSocial: string;
    private _empleados: Array<Empleado> = [];
    private _micros: Array<Micro> = [];

    constructor(razonSocial: string){
        this._razonSocial = razonSocial;
    }

    public verEmpleados(){
        for (const empleado of this._empleados) {
            console.log(`\nNombre: ${empleado.nombre}.
            \nApellido: ${empleado.apellido}.
            \nNro de legajo: ${empleado.legajo}.
            \nEs jefe: ${empleado.esJefe}.
                `)
        }
    }

    public verMicros(){
        for (const micro of this._micros) {
            console.log(`
                \nNro de micro: ${micro.numeroMicro}.
                \nVolumen: ${micro.volumen}.
                \nCapacidad máxima de pasajeros: ${micro.cantidadAsientos+micro.cantidadBarras}.
                `)
        }
    }

    public get info(){
        return `INFO DE LA EMPRESA:
        \n -Razon social: ${this._razonSocial}.
        \n-Empleados contratados: ${this.verEmpleados()}
        \n-Micros asignados: ${this.verMicros()}
        `
    }

}