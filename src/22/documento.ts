import { Doc } from "./doc";
import { IDocumentable } from "./interface-IDocumentable";

export class Documento extends Doc implements IDocumentable {
    private _expediente: number;
    private _lanzamiento: number;
    private _contenido: string;
    private _nombre: string;

    constructor(expte: number, launch: number, contenido: string, nombre: string, camposCompletos?: number) {
        super()
        this._expediente = expte;
        this._lanzamiento = launch;
        this._contenido = contenido;
        this._nombre = nombre;
    }

    public setID(value: number): void {
        this._expediente = value;
    }

    public setIssueDate(value: number): void {
        this._lanzamiento = value;
    }

    public setBody(value: string): void {
        this._contenido = value;
    }

    public setResponsible(value: string): void {
        this._nombre = value;
    }

    public getID(): number {
        return this._expediente
    }

    public getIssueDate(): number {
        return this._lanzamiento;
    }

    public getBody(): string {
        return this._contenido;
    }

    public getResponsible(): string {
        return this._nombre;
    }

        public getCamposCompletos(): number {
        return this.camposCompletos
    }

    public validarCamposCompletos() {
        (this._expediente) && this.camposCompletos++;
        (this._lanzamiento) && this.camposCompletos++;
        (this._contenido) && this.camposCompletos++;
        (this._nombre) && this.camposCompletos++;
    }

}