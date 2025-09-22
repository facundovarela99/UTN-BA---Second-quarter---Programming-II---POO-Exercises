import { Celular } from "./celular";

export class Persona{
    private _nombre: string;
    private _celular: Celular

    constructor(nombre: string, celular: Celular){
        this._nombre = nombre;
        this._celular = celular;
    }

    public get nombre(){
        return this._nombre;
    }

    public get celular(){
        return this._celular.nombreTipo;
    }

    public llamarA(persona: Persona, duracion: number){
        this._celular.realizaLlamada(persona._celular, duracion);
    }

    public cargarCelular(){
        this._celular.bateria = 100;
        this._celular.estado = true;
    }
}