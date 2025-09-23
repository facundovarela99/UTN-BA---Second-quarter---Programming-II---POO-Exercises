import { Persona } from "./persona";
import { Micro } from "./micro";

export abstract class Empleado extends Persona {
    private _legajo: number;
    private _esJefe: boolean;
    private _jefe!: Empleado;

    constructor(nombre: string, apellido: string, legajo: number, esJefe: boolean, jefe?: Empleado) {
        super(nombre, apellido)
        this._legajo = legajo;
        this._esJefe = esJefe;
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
}

