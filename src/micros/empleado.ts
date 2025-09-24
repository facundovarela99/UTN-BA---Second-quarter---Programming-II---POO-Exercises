import { Persona } from "./persona";
import { Micro } from "./micro";

export abstract class Empleado extends Persona {
    private _legajo: number;
    private _esJefe: boolean;
    private _jefe: Empleado | null;

    constructor(nombre: string, apellido: string, legajo: number, esJefe: boolean, jefe: Empleado | null) {
        super(nombre, apellido)
        this._legajo = legajo;
        this._esJefe = esJefe;
        this._jefe = jefe;
    }

    public get legajo(){
        return this._legajo;
    }

    public get esJefe(){
        return this._esJefe;
    }

    public get jefe(){
        return this._jefe;
    }

    public abstract subirAlMicro(micro: Micro): boolean;

    public comprobarLugarDisponible(micro: Micro): boolean{
        if (micro.asientosOcupados < micro.cantidadAsientos) {
                micro.pasajerosSentados.push(this);
                micro.asientosOcupados++;
                micro.pasajeros.push(this);
                return true
            } else if (micro.barrasOcupadas < micro.cantidadBarras){
                micro.pasajerosParados.push(this);
                micro.barrasOcupadas++;
                micro.pasajeros.push(this);
                return true
            }
            console.log('Ya no hay lugares disponibles');
            return false
    }
}

