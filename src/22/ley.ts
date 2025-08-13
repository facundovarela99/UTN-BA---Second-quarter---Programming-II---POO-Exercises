import { Doc } from "./doc";
import { IDocumentable } from "./interface-IDocumentable";

export class Ley extends Doc implements IDocumentable {
    private _folio: number;
    private _emision: number;
    private _desarrollo: string;
    private _firmante: string;

    constructor(folio: number, emision: number, desarrollo: string, firmante: string, camposCompletos?: number) {
        super()
        this._folio = folio;
        this._emision = emision;
        this._desarrollo = desarrollo;
        this._firmante = firmante;
    }

    public setID(value: number): void {
        this._folio = value;
    }

    public setIssueDate(value: number): void {
        this._emision = value;
    }

    public setBody(value: string): void {
        this._desarrollo = value;
    }

    public setResponsible(value: string): void {
        this._firmante = value;
    }

    public getID(): number {
        return this._folio
    }

    public getIssueDate(): number {
        return this._emision;
    }

    public getBody(): string {
        return this._desarrollo;
    }

    public getResponsible(): string {
        return this._firmante;
    }

        public getCamposCompletos(): number {
        return this.camposCompletos
    }

    public validarCamposCompletos() {
        (this._folio) && this.camposCompletos++;
        (this._emision) && this.camposCompletos++;
        (this._desarrollo) && this.camposCompletos++;
        (this._firmante) && this.camposCompletos++;
    }

}