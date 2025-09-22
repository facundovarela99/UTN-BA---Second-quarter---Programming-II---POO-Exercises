export abstract class Celular{
    private _nombreTipo: string;
    private _bateriaPuntos: number;
    private _estado: boolean;

    constructor(nombreTipo: string, bateriaPuntos: number, estado: boolean){
        this._nombreTipo = nombreTipo;
        this._bateriaPuntos = bateriaPuntos;
        this._estado = estado;
    }

    public get nombreTipo(): string{
        return this._nombreTipo;
    }

    public get bateria(): number{
        return this._bateriaPuntos;
    }

    public get estado(): boolean{
        return this._estado;
    }

    public set bateria(value: number){
        this._bateriaPuntos = value;
    }

    public set estado(value: boolean){
        this._estado = value;
    }

    public abstract realizaLlamada(celular: Celular, duracion: number): void;

    public abstract recibeLlamada(duracion: number): void;
}