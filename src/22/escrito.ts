import { Doc } from "./doc";
import { IDocumentable } from "./interface-IDocumentable";

export class Escrito extends Doc implements IDocumentable{
    private _legajo: number;
    private _erogacion: number;
    private _cuerpo: string;
    private _autor: string;

    constructor(legajo: number, erogacion: number, cuerpo: string, autor: string, camposCompletos?: number){
        super()
        this._legajo = legajo;
        this._erogacion = erogacion;
        this._cuerpo = cuerpo;
        this._autor = autor;
    }

    public setID(value: number): void {
        this._legajo = value;
    }

    public setIssueDate(value: number): void {
        this._erogacion = value;
    }

    public setBody(value: string): void {
        this._cuerpo = value;
    }

    public setResponsible(value: string): void {
        this._autor = value;
    }

    public getID(): number {
        return this._legajo
    }

    public getIssueDate(): number {
        return this._erogacion;
    }

    public getBody(): string {
        return this._cuerpo;
    }

    public getResponsible(): string {
        return this._autor;
    }

    public getCamposCompletos(): number {
        return this.camposCompletos
    }

    public validarCamposCompletos(){
        (this._legajo) && this.camposCompletos++;
        (this._erogacion) && this.camposCompletos++;
        (this._cuerpo) && this.camposCompletos++;
        (this._autor) && this.camposCompletos++;
    }

}