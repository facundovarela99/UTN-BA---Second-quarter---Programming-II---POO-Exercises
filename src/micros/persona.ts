export abstract class Persona{
    private _nombre: string;
    private _apellido: string;

    constructor(nombre: string, apellido: string){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    public get nombre(){
        return this._nombre;
    }

    public get apellido(){
        return this._apellido;
    }
}